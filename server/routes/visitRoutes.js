const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  scheduleVisit,
  getVisits,
  getMyVisits,
  updateVisitStatus,
} = require("../controllers/visitController");

router.post("/", protect, scheduleVisit);

// Owner's visit requests
router.get("/", protect, getVisits);

// Logged-in user's scheduled visits
router.get("/my-visits", protect, getMyVisits);

// Accept / Reject
router.put("/:id", protect, updateVisitStatus);

module.exports = router;