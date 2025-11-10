const mongoose = require('mongoose');
const { Schema } = mongoose;

const Customer360Schema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  name: String,
  email: String,
  tags: [String],
  contacts: [Schema.Types.Mixed],
  purchases: [Schema.Types.Mixed],
  interactions: [Schema.Types.Mixed],
  aiInsights: Schema.Types.Mixed,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Customer360', Customer360Schema);
