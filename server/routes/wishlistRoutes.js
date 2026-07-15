const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  addWishlist,
  getWishlist,
  removeWishlist,
} = require("../controllers/wishlistController");

router.post("/", protect, addWishlist);

router.get("/", protect, getWishlist);

router.delete("/:id", protect, removeWishlist);

module.exports = router;