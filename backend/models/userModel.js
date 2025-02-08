import mongoose from "mongoose";

const userModel = new mongoose.Schema({
  name: { 
    type: String, 
    required: true
  },
  role: { 
    type: String, 
    enum: ['Admin', 'Staff', 'Supplier'], 
    required: true 
  },
  email: { 
    type: String, 
    required: true, 
    unique: true 
  },
  password: { 
    type: String, 
    required: true 
  }, // To be hashed this later
});

module.exports = mongoose.model('User', userModel);
        