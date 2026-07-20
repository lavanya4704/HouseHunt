import { useParams } from "react-router-dom";
import axios from "axios";
import "./styles/PropertyDetails.css";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function PropertyDetails() {
  const { id } = useParams();

  const [property, setProperty] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
const [visitDate, setVisitDate] = useState("");
const [visitTime, setVisitTime] = useState("");
  useEffect(() => {
    fetchProperty();
    fetchReviews();
  }, []);

  // Fetch Property
  const fetchProperty = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/api/properties/${id}`
      );

      setProperty(data);
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch Reviews
  const fetchReviews = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/api/reviews/${id}`
      );

      setReviews(data);
    } catch (error) {
      console.log(error);
    }
  };

  // Wishlist
  const addToWishlist = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      toast.error("Please login first");
      return;
    }

    try {
      await axios.post(
        "http://localhost:5000/api/wishlist",
        {
          propertyId: property._id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Added to Wishlist ❤️");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Unable to add to wishlist"
      );
    }
  };

  // Submit Review
  const submitReview = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      toast.error("Please login first");
      return;
    }

    if (comment.trim() === "") {
      toast.error("Please write a review");
      return;
    }

    try {
      await axios.post(
        "http://localhost:5000/api/reviews",
        {
          propertyId: property._id,
          rating,
          comment,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Review Added Successfully ⭐");

      setComment("");
      setRating(5);

      fetchReviews();
    } catch (error) {
      toast.error("Unable to submit review");
    }
  };
const scheduleVisit = async () => {

  const token = localStorage.getItem("token");

  if (!token) {
    toast.error("Please login first");
    return;
  }

  if (!visitDate || !visitTime) {
    toast.error("Please select date and time");
    return;
  }

  try {

    await axios.post(
      "http://localhost:5000/api/visits",
      {
        propertyId: property._id,
        visitDate,
        visitTime,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    toast.success("Visit Scheduled Successfully 🎉");

    setVisitDate("");
    setVisitTime("");

  } catch (error) {

    toast.error(
      error.response?.data?.message ||
      "Unable to schedule visit"
    );

  }

};
  if (!property) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "100px" }}>
        Loading...
      </h2>
    );
  }

  return (
    <div className="property-details">

      <img
        src={
          property.image
            ? property.image
            : "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=900"
        }
        alt={property.title}
        className="details-image"
      />

      <div className="details-content">

        <h1>{property.title}</h1>

        <h2>₹ {property.price}</h2>

        <p className="location">
          📍 {property.location}
        </p>

        <div className="details-info">
          <span>🛏 {property.bedrooms} Bedrooms</span>
          <span>🛁 {property.bathrooms} Bathrooms</span>
        </div>

        <h3>Description</h3>

        <p>{property.description}</p>

        <div className="owner-card">
          <h3>Listed By</h3>

          <p><strong>Name:</strong> {property.owner?.name}</p>

          <p><strong>Email:</strong> {property.owner?.email}</p>

          {property.owner?.phone && (
            <p><strong>Phone:</strong> {property.owner.phone}</p>
          )}
        </div>

        <div className="map-section">

          <h3>📍 Property Location</h3>

          <iframe
            title="Google Map"
            width="100%"
            height="350"
            style={{
              border: 0,
              borderRadius: "12px",
              marginTop: "15px",
            }}
            loading="lazy"
            allowFullScreen
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              property.location
            )}&output=embed`}
          ></iframe>

        </div>
<div className="visit-card">

  <h3>📅 Schedule a Visit</h3>

  <input
    type="date"
    value={visitDate}
    onChange={(e) =>
      setVisitDate(e.target.value)
    }
  />

  <select
    value={visitTime}
    onChange={(e) =>
      setVisitTime(e.target.value)
    }
  >
    <option value="">
      Select Time
    </option>

    <option value="10:00 AM">
      10:00 AM
    </option>

    <option value="11:00 AM">
      11:00 AM
    </option>

    <option value="12:00 PM">
      12:00 PM
    </option>

    <option value="02:00 PM">
      02:00 PM
    </option>

    <option value="03:00 PM">
      03:00 PM
    </option>

    <option value="04:00 PM">
      04:00 PM
    </option>

    <option value="05:00 PM">
      05:00 PM
    </option>

  </select>

  <button
    className="visit-btn"
    onClick={scheduleVisit}
  >
    Schedule Visit
  </button>

</div>
        <div className="details-buttons">

          <button
            className="wishlist-btn"
            onClick={addToWishlist}
          >
            ❤️ Wishlist
          </button>

          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${property.owner?.email}`}
            target="_blank"
            rel="noreferrer"
            className="contact-btn"
          >
            ✉️ Email Owner
          </a>

          {property.owner?.phone && (
            <a
              href={`https://wa.me/91${property.owner.phone}`}
              target="_blank"
              rel="noreferrer"
              className="contact-btn"
            >
              💬 WhatsApp
            </a>
          )}

        </div>

        <hr />

        <div className="review-section">

          <h2>⭐ Reviews & Ratings</h2>

          <div className="review-form">

            <select
              value={rating}
              onChange={(e) =>
                setRating(Number(e.target.value))
              }
            >
              <option value={5}>⭐⭐⭐⭐⭐</option>
              <option value={4}>⭐⭐⭐⭐</option>
              <option value={3}>⭐⭐⭐</option>
              <option value={2}>⭐⭐</option>
              <option value={1}>⭐</option>
            </select>

            <textarea
              placeholder="Write your review..."
              value={comment}
              onChange={(e) =>
                setComment(e.target.value)
              }
            />

            <button
              className="contact-btn"
              onClick={submitReview}
            >
              Submit Review
            </button>

          </div>

          <div className="review-list">

            {reviews.length === 0 ? (

              <p>No Reviews Yet</p>

            ) : (

              reviews.map((review) => (

                <div
                  className="review-card"
                  key={review._id}
                >

                  <h3>{review.user?.name}</h3>

                  <p>{"⭐".repeat(review.rating)}</p>

                  <p>{review.comment}</p>

                </div>

              ))

            )}

          </div>

        </div>

      </div>

    </div>
  );
}

export default PropertyDetails;