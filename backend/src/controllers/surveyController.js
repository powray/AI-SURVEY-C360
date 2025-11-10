const Survey = require('../models/Survey');

exports.getQuestions = (req, res) => {
  // Example static questions
  const questions = [
    { id: 'industry', text: 'What is your industry?' },
    { id: 'role', text: 'What is your role?' },
    { id: 'goal', text: 'What is the main goal for using the assistant?' }
  ];
  res.json({ questions });
};

exports.submit = async (req, res) => {
  const { userId, answers } = req.body;
  try {
    const survey = await Survey.create({ userId, answers });
    res.json({ survey });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
