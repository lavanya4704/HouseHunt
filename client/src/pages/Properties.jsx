import { useEffect, useState } from "react";
import PropertyCard from "../components/PropertyCard";
import "./styles/Properties.css";
import Loader from "../components/Loader";

function Properties() {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);

  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [bedrooms, setBedrooms] = useState("");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/properties")
      .then((res) => res.json())
      .then((data) => {
        setProperties(data);
        setFilteredProperties(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let result = [...properties];

    // Search by title
    if (search !== "") {
      result = result.filter((property) =>
        property.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Search by location
    if (location !== "") {
      result = result.filter((property) =>
        property.location.toLowerCase().includes(location.toLowerCase())
      );
    }

    // Filter by price
    if (price !== "") {
      result = result.filter(
        (property) => Number(property.price) <= Number(price)
      );
    }

    // Filter by bedrooms
    if (bedrooms !== "") {
      result = result.filter(
        (property) => Number(property.bedrooms) === Number(bedrooms)
      );
    }

    setFilteredProperties(result);
  }, [search, location, price, bedrooms, properties]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="properties">

      <h1>Available Properties</h1>

      <div className="filters">

        <input
          type="text"
          placeholder="🔍 Search Property"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <input
          type="text"
          placeholder="📍 Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <input
          type="number"
          placeholder="💰 Max Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <select
          value={bedrooms}
          onChange={(e) => setBedrooms(e.target.value)}
        >
          <option value="">Bedrooms</option>
          <option value="1">1 BHK</option>
          <option value="2">2 BHK</option>
          <option value="3">3 BHK</option>
          <option value="4">4+ BHK</option>
        </select>

        <button
          onClick={() => {
            setSearch("");
            setLocation("");
            setPrice("");
            setBedrooms("");
          }}
        >
          Clear Filters
        </button>

      </div>

      <div className="property-grid">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <PropertyCard
              key={property._id}
              property={property}
            />
          ))
        ) : (
          <h2>No properties found.</h2>
        )}
      </div>

    </div>
  );
}

export default Properties;