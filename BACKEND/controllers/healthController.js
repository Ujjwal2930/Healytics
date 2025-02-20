const HealthRecord = require("../models/HealthRecord");

exports.createRecord = async (req, res) => {
    try {
        const newRecord = new HealthRecord({ ...req.body, userId: req.user.id });
        await newRecord.save();
        res.status(201).json(newRecord);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getRecords = async (req, res) => {
    try {
        const records = await HealthRecord.find({ userId: req.user.id });
        res.json(records);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateRecord = async (req, res) => {
    try {
        const record = await HealthRecord.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!record) return res.status(404).json({ message: "Record not found" });
        res.json(record);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteRecord = async (req, res) => {
    try {
        const record = await HealthRecord.findByIdAndDelete(req.params.id);
        if (!record) return res.status(404).json({ message: "Record not found" });
        res.json({ message: "Record deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
