// ================================
// Load Environment Variables First
// ================================
const reviewRoutes = require("./routes/reviewRoutes");
const wishlistRoutes = require("./routes/wishlistRoutes");
require("dotenv").config();
const visitRoutes = require("./routes/visitRoutes");
// ================================
// Imports
// ================================
const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const propertyRoutes = require("./routes/propertyRoutes");

// ================================
// Initialize Express
// ================================
const app = express();

// ================================
// Connect Database
// ================================
connectDB();

// ================================
// Middleware
// ================================
app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// ================================
// Routes
// ================================
app.use("/api/auth", authRoutes);

app.use("/api/properties", propertyRoutes);
app.use("/api/wishlist", wishlistRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/visits", visitRoutes);
// ================================
// Default Route
// ================================
app.get("/", (req, res) => {
  res.send("🏠 HouseHunt API Running...");
});

// ================================
// Start Server
// ================================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("--------------------------------");
  console.log(`🚀 Server Running on Port ${PORT}`);
  console.log("--------------------------------");
});