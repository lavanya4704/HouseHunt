import { Link } from "react-router-dom";
import "../styles/PropertyCard.css";

function PropertyCard({ property }) {

  return (

    <Link
      to={`/property/${property._id}`}
      className="property-link"
    >

      <div className="property-card">

        <img
          src={
            property.image ||
            "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=600"
          }
          alt={property.title}
        />

        <div className="property-content">

          <span className="badge">
            ₹ {property.price}/month
          </span>

          <h2>{property.title}</h2>

          <p>📍 {property.location}</p>

          <p>🛏 {property.bedrooms} Bedrooms</p>

          <p>🛁 {property.bathrooms} Bathrooms</p>

          <button>
            View Details
          </button>

        </div>

      </div>

    </Link>

  );

}

export default PropertyCard;