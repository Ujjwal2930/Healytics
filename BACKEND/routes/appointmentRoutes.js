const express = require("express");
const { bookAppointment, getAppointments, updateAppointment, cancelAppointment } = require("../controllers/appointmentController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, bookAppointment);
router.get("/", authMiddleware, getAppointments);
router.put("/:id", authMiddleware, updateAppointment);
router.delete("/:id", authMiddleware, cancelAppointment);

module.exports = router;
