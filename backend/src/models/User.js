const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  passwordHash: String,
  oauthProviders: [{ provider: String, accessToken: String, refreshToken: String, expiresAt: Date }],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);
