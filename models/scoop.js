// models/scoop.js
const mongoose = require('mongoose');

const scoopSchema = new mongoose.Schema({
  scoopFlavor: {
    type: String,
    required: true,
  },
  scoopColor: {
    type: String,
    required: true,
  },
  scoopSize: {
    type: String,
    required: true,
  },
  scoopPrice: {
    type: Number,
    required: true,
    min: [1, "Price must be at least 1"],
    max: [10, "Price must be less than or equal to 10"],
  },
});

module.exports = mongoose.model("Scoop", scoopSchema);
