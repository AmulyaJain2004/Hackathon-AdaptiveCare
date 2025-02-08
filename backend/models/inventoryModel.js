import mongoose from "mongoose";

const inventorySchema = new mongoose.Schema({
    itemName: { type: String, required: true },
    quantity: { type: Number, required: true },
    restockLevel: { type: Number, default: 10 }, // Alert if below this level
    lastUpdated: { type: Date, default: Date.now },
  });
  
  module.exports = mongoose.model('Inventory', inventorySchema);
  