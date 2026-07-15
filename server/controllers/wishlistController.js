const Wishlist = require("../models/Wishlist");

// Add Property to Wishlist
exports.addWishlist = async (req, res) => {
  try {
    console.log("========== WISHLIST ==========");
    console.log("Body:", req.body);
    console.log("User:", req.user);

    const { propertyId } = req.body;

    if (!propertyId) {
      return res.status(400).json({
        message: "Property ID is required",
      });
    }

    const exists = await Wishlist.findOne({
      user: req.user.id,
      property: propertyId,
    });

    if (exists) {
      return res.status(400).json({
        message: "Property already in wishlist",
      });
    }

    const wishlist = await Wishlist.create({
      user: req.user.id,
      property: propertyId,
    });

    res.status(201).json({
      message: "Added to Wishlist",
      wishlist,
    });

  } catch (error) {
    console.error("Wishlist Error:", error);

    res.status(500).json({
      message: error.message,
    });
  }
};

// Get My Wishlist
exports.getWishlist = async (req, res) => {
  try {
    const wishlist = await Wishlist.find({
      user: req.user.id,
    }).populate("property");

    res.status(200).json(wishlist);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

// Remove Property from Wishlist
exports.removeWishlist = async (req, res) => {
  try {
    const wishlist = await Wishlist.findById(req.params.id);

    if (!wishlist) {
      return res.status(404).json({
        message: "Wishlist item not found",
      });
    }

    await Wishlist.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Removed Successfully",
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: error.message,
    });
  }
};