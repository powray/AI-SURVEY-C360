const mongoose = require('mongoose');
const { Schema } = mongoose;

const MessageSchema = new Schema({ role: String, text: String, createdAt: { type: Date, default: Date.now } });

const ConversationSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  messages: [MessageSchema],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Conversation', ConversationSchema);
