const express = require('express');
const router = express.Router();
const { getCustomer, listCustomers } = require('../controllers/c360Controller');
router.get('/:id', getCustomer);
router.get('/', listCustomers);
module.exports = router;
