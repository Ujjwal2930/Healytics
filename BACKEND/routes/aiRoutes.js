const express = require("express");
const { getHealthInsights } = require("../controllers/aiController");

const router = express.Router();
router.post("/insights", getHealthInsights);

module.exports = router;
