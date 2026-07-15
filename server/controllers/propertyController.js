const Property = require("../models/Property");

/**
 * ===============================
 * GET ALL PROPERTIES
 * ===============================
 */
exports.getProperties = async (req, res) => {
  try {
    const properties = await Property.find()
      .populate("owner", "name email phone")
      .sort({ createdAt: -1 });

    res.status(200).json(properties);

  } catch (error) {

    console.error("GET PROPERTIES ERROR:", error);

    res.status(500).json({
      message: "Failed to fetch properties",
      error: error.message,
    });

  }
};

/**
 * ===============================
 * GET SINGLE PROPERTY
 * ===============================
 */
exports.getPropertyById = async (req, res) => {

  try {

    console.log("Fetching Property:", req.params.id);

    const property = await Property.findById(req.params.id)
      .populate("owner", "name email phone");

    if (!property) {
      return res.status(404).json({
        message: "Property not found",
      });
    }

    res.status(200).json(property);

  } catch (error) {

    console.error("GET PROPERTY ERROR:", error);

    res.status(500).json({
      message: "Failed to fetch property",
      error: error.message,
    });

  }

};

/**
 * ===============================
 * ADD PROPERTY
 * ===============================
 */
exports.addProperty = async (req, res) => {

  try {

    console.log("========== ADD PROPERTY ==========");
    console.log("BODY:", req.body);
    console.log("FILE:", req.file);
    console.log("USER:", req.user);

    const {
      title,
      description,
      price,
      location,
      bedrooms,
      bathrooms,
    } = req.body;

    if (!title || !price || !location) {
      return res.status(400).json({
        message: "Title, Price and Location are required",
      });
    }

    const property = await Property.create({
      title,
      description,
      price,
      location,
      bedrooms,
      bathrooms,
      image: req.file ? req.file.path : "",
      owner: req.user.id,
    });

    console.log("PROPERTY CREATED:", property._id);

    res.status(201).json(property);

  } catch (error) {

    console.error("ADD PROPERTY ERROR");
    console.error(error);

    res.status(500).json({
      message: error.message,
    });

  }

};

/**
 * ===============================
 * UPDATE PROPERTY
 * ===============================
 */
exports.updateProperty = async (req, res) => {

  try {

    console.log("========== UPDATE PROPERTY ==========");
    console.log("Property ID:", req.params.id);
    console.log("Request Body:", req.body);
    console.log("Logged User:", req.user);

    const property = await Property.findById(req.params.id);

    if (!property) {

      return res.status(404).json({
        message: "Property not found",
      });

    }

    if (property.owner.toString() !== req.user.id) {

      return res.status(401).json({
        message: "Not Authorized",
      });

    }

    const updatedProperty = await Property.findByIdAndUpdate(
      req.params.id,
      {
        ...req.body,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json(updatedProperty);

  } catch (error) {

    console.error("UPDATE PROPERTY ERROR");
    console.error(error);

    res.status(500).json({
      message: error.message,
    });

  }

};

/**
 * ===============================
 * DELETE PROPERTY
 * ===============================
 */
exports.deleteProperty = async (req, res) => {

  try {

    console.log("DELETE PROPERTY:", req.params.id);

    const property = await Property.findById(req.params.id);

    if (!property) {

      return res.status(404).json({
        message: "Property not found",
      });

    }

    if (property.owner.toString() !== req.user.id) {

      return res.status(403).json({
        message: "You are not allowed to delete this property",
      });

    }

    await Property.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Property deleted successfully",
    });

  } catch (error) {

    console.error("DELETE PROPERTY ERROR");
    console.error(error);

    res.status(500).json({
      message: error.message,
    });

  }

};