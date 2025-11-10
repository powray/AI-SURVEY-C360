const mongoose = require('mongoose');
const { Schema } = mongoose;

const ActionSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  type: String,
  payload: Schema.Types.Mixed,
  status: { type: String, default: 'pending' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Action', ActionSchema);
