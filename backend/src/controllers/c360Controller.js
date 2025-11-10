const Customer360 = require('../models/Customer360');

exports.getCustomer = async (req, res) => {
  const { id } = req.params;
  try {
    const cust = await Customer360.findById(id);
    if (!cust) return res.status(404).json({ error: 'Not found' });
    res.json({ customer: cust });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.listCustomers = async (req, res) => {
  const { userId } = req.query;
  try {
    const list = await Customer360.find({ userId });
    res.json({ customers: list });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
