const mongoose = require('mongoose');
const { Schema } = mongoose;

const SurveySchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  answers: [{ questionId: String, value: Schema.Types.Mixed }],
  metadata: Schema.Types.Mixed,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Survey', SurveySchema);
