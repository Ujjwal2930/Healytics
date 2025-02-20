const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    doctorName: { type: String, required: true },
    date: { type: Date, required: true },
    notes: { type: String },
    status: { type: String, default: "Pending" }
});

module.exports = mongoose.model("Appointment", appointmentSchema);
