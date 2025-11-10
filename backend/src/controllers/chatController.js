const openai = require('../utils/openaiClient');
const Conversation = require('../models/Conversation');
const Customer360 = require('../models/Customer360');
const Action = require('../models/Action');
const { parseActionsFromText } = require('../utils/actionParser');

exports.chat = async (req, res) => {
  const { userId, message } = req.body;

  // Build system prompt (include survey/profile in production)
  const systemPrompt = `You are an assistant that helps create customer records and tasks. When you decide an action is needed, output a JSON object inside a code block with key \"actions\" that is an array of actions. Allowed action types: create_customer, update_customer, create_task, tag_customer.`;

  try {
    // Save user message
    let convo = await Conversation.findOne({ userId });
    if (!convo) convo = await Conversation.create({ userId, messages: [] });
    convo.messages.push({ role: 'user', text: message });
    await convo.save();

    // Call OpenAI
    const response = await openai.createChatCompletion({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: message }
      ],
      temperature: 0.2
    });

    const assistantText = response.data.choices[0].message.content;
    convo.messages.push({ role: 'assistant', text: assistantText });
    await convo.save();

    // Parse for actions
    const actions = parseActionsFromText(assistantText);
    const executed = [];

    for (const action of actions) {
      if (action.type === 'create_customer') {
        const payload = action.payload || {};
        const cust = await Customer360.create({ userId, ...payload });
        executed.push({ type: 'create_customer', id: cust._id });
      } else if (action.type === 'create_task') {
        const a = await Action.create({ userId, type: 'create_task', payload: action.payload });
        executed.push({ type: 'create_task', id: a._id });
      } else if (action.type === 'tag_customer') {
        // naive tag - in real app, validate
        const { customerId, tag } = action.payload || {};
        if (customerId) {
          const cust = await Customer360.findById(customerId);
          if (cust) {
            cust.tags = Array.from(new Set([...(cust.tags || []), tag]));
            await cust.save();
            executed.push({ type: 'tag_customer', id: cust._id });
          }
        }
      }
    }

    res.json({ assistantText, actions: executed });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};
