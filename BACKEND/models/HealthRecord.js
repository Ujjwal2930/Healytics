const mongoose = require("mongoose");

const healthRecordSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    symptoms: [{ type: String }],
    labTests: [{ type: String }],
    healthGoals: { type: Object },
    wellnessCheckIns: [{ type: Object }],
    diagnosis: [{ type: String }],
    medications: [{ type: String }],
    doctorNotes: [{ type: String }],
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("HealthRecord", healthRecordSchema);
