import mongoose from "mongoose";

const workforceModel = new mongoose.Schema({
    staffName: { type: String, required: true },
    shiftStart: { type: Date, required: true },
    shiftEnd: { type: Date, required: true },
    role: { type: String, required: true }, // e.g., Doctor, Nurse
  });
  
  module.exports = mongoose.model('Workforce', workforceModel);
  