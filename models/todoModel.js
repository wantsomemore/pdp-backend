const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  value: {
    type: String,
    required: [true, "Your todo  is required"],
  },
  id: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("Todo", todoSchema);
