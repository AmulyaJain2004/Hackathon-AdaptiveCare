const express = require('express');
const router = express.Router();
const Workforce = require('../models/workforceScheduleModel.js');

// Add a new workforce schedule
router.post('/', async (req, res) => {
  try {
    const newSchedule = await Workforce.create(req.body);
    res.status(201).json(newSchedule);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all workforce schedules
router.get('/', async (req, res) => {
  try {
    const schedules = await Workforce.find();
    res.status(200).json(schedules);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
