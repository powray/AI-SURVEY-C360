const express = require('express');
const router = express.Router();
const { getQuestions, submit } = require('../controllers/surveyController');
router.get('/questions', getQuestions);
router.post('/submit', submit);
module.exports = router;
