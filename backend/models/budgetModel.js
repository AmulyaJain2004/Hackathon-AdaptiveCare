import mongoose from "mongoose";
const budgetSchema = new mongoose.Schema({
    department: { type: String, required: true },
    allocated: { type: Number, required: true },
    spent: { type: Number, required: true },
    remaining: { type: Number },
  });
  
  budgetSchema.pre('save', function () {
    this.remaining = this.allocated - this.spent;
  });
  
module.exports = mongoose.model('Budget', budgetSchema);
  