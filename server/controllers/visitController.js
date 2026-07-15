const Visit = require("../models/Visit");
const Property = require("../models/Property");

// ==========================================
// Schedule Visit
// ==========================================
exports.scheduleVisit = async (req, res) => {
  try {
    const {
      propertyId,
      visitDate,
      visitTime,
    } = req.body;

    const property = await Property.findById(propertyId);

    if (!property) {
      return res.status(404).json({
        message: "Property not found",
      });
    }

    const visit = await Visit.create({
      property: propertyId,
      visitor: req.user.id,
      owner: property.owner,
      visitDate,
      visitTime,
    });

    res.status(201).json({
      message: "Visit Scheduled Successfully",
      visit,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ==========================================
// Get Owner Visit Requests
// ==========================================
exports.getVisits = async (req, res) => {
  try {

    const visits = await Visit.find({
      owner: req.user.id,
    })
      .populate("visitor", "name email phone")
      .populate("property", "title location");

    res.status(200).json(visits);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

// ==========================================
// Get Logged-in User Visits
// ==========================================
exports.getMyVisits = async (req, res) => {

  try {

    const visits = await Visit.find({
      visitor: req.user.id,
    })
      .populate("property", "title location image")
      .populate("owner", "name email phone");

    res.status(200).json(visits);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

// ==========================================
// Accept / Reject Visit
// ==========================================
exports.updateVisitStatus = async (req, res) => {

  try {

    const { status } = req.body;

    if (
      status !== "Accepted" &&
      status !== "Rejected"
    ) {
      return res.status(400).json({
        message: "Invalid Status",
      });
    }

    const visit = await Visit.findById(req.params.id);

    if (!visit) {
      return res.status(404).json({
        message: "Visit not found",
      });
    }

    if (
      visit.owner.toString() !== req.user.id
    ) {
      return res.status(401).json({
        message: "Not Authorized",
      });
    }

    visit.status = status;

    await visit.save();

    res.status(200).json({
      message: "Visit Updated Successfully",
      visit,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};