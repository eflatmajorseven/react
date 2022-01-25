const mongoose = require("mongoose");

const Slot = mongoose.model(
  "Slot",
  new mongoose.Schema({
    name: String,
    lastname: String,
    date: Date,
    startShift: Date,
    endshift: Date,
    shiftTime: Number
  })
);

module.exports = Slot;
