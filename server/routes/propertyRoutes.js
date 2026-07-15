const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");
const upload = require("../middleware/upload");

const {
  getProperties,
  getPropertyById,
  addProperty,
  deleteProperty,
  updateProperty
} = require("../controllers/propertyController");

// Get all properties
router.get("/", getProperties);

// Get single property
router.get("/:id", getPropertyById);

// Add property (with image upload)
router.post(
  "/",
  protect,
  upload.single("image"),
  addProperty
);

// Update property
router.put(
  "/:id",
  protect,
  updateProperty
);

// Delete property
router.delete(
  "/:id",
  protect,
  deleteProperty
);

module.exports = router;