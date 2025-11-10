const { Configuration, OpenAIApi } = require('openai');
const { openaiKey } = require('../config');

const configuration = new Configuration({ apiKey: openaiKey });
const openai = new OpenAIApi(configuration);

module.exports = openai;
