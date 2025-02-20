const Appointment = require("../models/Appointment");

exports.bookAppointment = async (req, res) => {
    try {
        const appointment = new Appointment({ ...req.body, userId: req.user.id });
        await appointment.save();
        res.status(201).json(appointment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find({ userId: req.user.id });
        res.json(appointments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateAppointment = async (req, res) => {
    try {
        const appointment = await Appointment.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!appointment) return res.status(404).json({ message: "Appointment not found" });
        res.json(appointment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.cancelAppointment = async (req, res) => {
    try {
        const appointment = await Appointment.findByIdAndDelete(req.params.id);
        if (!appointment) return res.status(404).json({ message: "Appointment not found" });
        res.json({ message: "Appointment canceled successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
