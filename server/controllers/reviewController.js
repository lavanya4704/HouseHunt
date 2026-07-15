const Review = require("../models/Review");

// Add Review
exports.addReview = async (req, res) => {
  try {

    const { propertyId, rating, comment } = req.body;

    const review = await Review.create({
      property: propertyId,
      user: req.user.id,
      rating,
      comment,
    });

    res.status(201).json(review);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

// Get Reviews for Property
exports.getReviews = async (req, res) => {

  try {

    const reviews = await Review.find({
      property: req.params.id,
    }).populate("user", "name");

    res.json(reviews);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};