import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import PropertyCard from "../components/PropertyCard";
import StatsCard from "../components/StatsCard";

import "./styles/Dashboard.css";

function Dashboard() {

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const [properties, setProperties] = useState([]);
  const [visits, setVisits] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    if (user) {
      fetchMyProperties();
      fetchVisits();
    } else {
      setLoading(false);
    }

  }, []);

  // ==========================
  // Fetch My Properties
  // ==========================

  const fetchMyProperties = async () => {

    try {

      setLoading(true);

      const { data } = await axios.get(
        "http://localhost:5000/api/properties"
      );

      const myProperties = data.filter(
        (property) =>
          property.owner?.email === user?.email
      );

      setProperties(myProperties);

    } catch (error) {

      console.log(error);

      toast.error("Failed to load properties");

    } finally {

      setLoading(false);

    }

  };

  // ==========================
  // Fetch Visit Requests
  // ==========================

  const fetchVisits = async () => {

    const token = localStorage.getItem("token");

    try {

      const { data } = await axios.get(
        "http://localhost:5000/api/visits",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setVisits(data);

    } catch (error) {

      console.log(error);

    }

  };

  // ==========================
  // Accept Visit
  // ==========================

  const acceptVisit = async (id) => {

    const token = localStorage.getItem("token");

    try {

      await axios.put(
        `http://localhost:5000/api/visits/${id}`,
        {
          status: "Accepted",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Visit Accepted");

      fetchVisits();

    } catch (error) {

      console.log(error);

      toast.error("Unable to update visit");

    }

  };

  // ==========================
  // Reject Visit
  // ==========================

  const rejectVisit = async (id) => {

    const token = localStorage.getItem("token");

    try {

      await axios.put(
        `http://localhost:5000/api/visits/${id}`,
        {
          status: "Rejected",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Visit Rejected");

      fetchVisits();

    } catch (error) {

      console.log(error);

      toast.error("Unable to update visit");

    }

  };

  // ==========================
  // Delete Property
  // ==========================

  const deleteProperty = async (id) => {

    const token = localStorage.getItem("token");

    try {

      await axios.delete(
        `http://localhost:5000/api/properties/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Property Deleted Successfully");

      fetchMyProperties();

    } catch (error) {

      console.log(error);

      toast.error("Unable to Delete Property");

    }

  };

  // ==========================
  // Loading Screen
  // ==========================

  if (loading) {

    return (

      <h2
        style={{
          textAlign: "center",
          marginTop: "100px",
        }}
      >
        Loading Dashboard...
      </h2>

    );

  }
    return (
    <div className="dashboard">

      {/* ================= HEADER ================= */}

      <div className="dashboard-header">
        <h1>Welcome, {user?.name} 👋</h1>
        <p>Manage your properties from one place.</p>
      </div>

      {/* ================= STATS ================= */}

      <div className="dashboard-stats">

        <StatsCard
          title="My Properties"
          value={properties.length}
          icon="🏠"
        />

        <StatsCard
          title="Visit Requests"
          value={visits.length}
          icon="📅"
        />

        <StatsCard
          title="Saved Homes"
          value="0"
          icon="❤️"
        />

        <StatsCard
          title="Messages"
          value="0"
          icon="💬"
        />

      </div>

      {/* ================= MY PROPERTIES ================= */}

      <div className="my-properties">

        <h2>My Properties</h2>

        {properties.length === 0 ? (

          <div className="empty-dashboard">

            <h2>No Properties Yet 🏡</h2>

            <p>
              Start by adding your first property.
            </p>

            <button
              onClick={() => navigate("/add-property")}
            >
              ➕ Add Property
            </button>

          </div>

        ) : (

          <div className="property-list">

            {properties.map((property) => (

              <div
                key={property._id}
                className="dashboard-property"
              >

                <PropertyCard property={property} />

                <div className="dashboard-buttons">

                  <Link
                    to={`/edit-property/${property._id}`}
                  >
                    <button className="edit-btn">
                      Edit
                    </button>
                  </Link>

                  <button
                    className="delete-btn"
                    onClick={() =>
                      deleteProperty(property._id)
                    }
                  >
                    Delete
                  </button>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

      {/* ================= VISIT REQUESTS ================= */}

      <div className="visit-section">

        <h2>📅 Visit Requests</h2>

        {visits.length === 0 ? (

          <p>No Visit Requests Yet.</p>

        ) : (

          visits.map((visit) => (

            <div
              key={visit._id}
              className="visit-card"
            >

              <h3>{visit.property?.title}</h3>

              <p>
                <strong>Visitor:</strong>{" "}
                {visit.visitor?.name}
              </p>

              <p>
                <strong>Email:</strong>{" "}
                {visit.visitor?.email}
              </p>

              <p>
                <strong>Phone:</strong>{" "}
                {visit.visitor?.phone}
              </p>

              <p>
                <strong>Date:</strong>{" "}
                {visit.visitDate}
              </p>

              <p>
                <strong>Time:</strong>{" "}
                {visit.visitTime}
              </p>

              <p>
                <strong>Status:</strong>{" "}
                {visit.status}
              </p>

              {visit.status === "Pending" && (

                <div className="visit-buttons">

                  <button
                    className="accept-btn"
                    onClick={() =>
                      acceptVisit(visit._id)
                    }
                  >
                    ✅ Accept
                  </button>

                  <button
                    className="reject-btn"
                    onClick={() =>
                      rejectVisit(visit._id)
                    }
                  >
                    ❌ Reject
                  </button>

                </div>

              )}

            </div>

          ))

        )}

      </div>

      {/* ================= QUICK ACTIONS ================= */}

      <div className="quick-actions">

        <h2>Quick Actions</h2>

        <div className="quick-grid">

          <button
            onClick={() =>
              navigate("/add-property")
            }
          >
            ➕ Add Property
          </button>

          <button
            onClick={() =>
              navigate("/wishlist")
            }
          >
            ❤️ Wishlist
          </button>

          <button
            onClick={() =>
              navigate("/properties")
            }
          >
            🏠 Browse Properties
          </button>

          <button
            onClick={() =>
              navigate("/")
            }
          >
            🏡 Home
          </button>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;