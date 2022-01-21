const mongoose = require("mongoose");

const Slot = mongoose.model(
    "Slot",
    new mongoose.Schema({
        name: String,
        lastname: String,
        shiftStart: Date,
        shiftEnd: Date,
        shiftTime: Number
    })

);

module.exports = Slot;