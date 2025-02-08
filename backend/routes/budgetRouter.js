const express = require('express');
const router = express.Router();
const Budget = require('../models/budgetModel.js');

// Add a new budget entry
router.post('/', async (req, res) => {
  try {
    const newBudget = await Budget.create(req.body);
    res.status(201).json(newBudget);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all budgets
router.get('/', async (req, res) => {
  try {
    const budgets = await Budget.find();
    res.status(200).json(budgets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
