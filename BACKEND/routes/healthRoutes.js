const express = require("express");
const { createRecord, getRecords, updateRecord, deleteRecord } = require("../controllers/healthController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, createRecord);
router.get("/", authMiddleware, getRecords);
router.put("/:id", authMiddleware, updateRecord);
router.delete("/:id", authMiddleware, deleteRecord);

module.exports = router;
