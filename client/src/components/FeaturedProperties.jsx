import { useEffect, useState } from "react";
import axios from "axios";
import PropertyCard from "./PropertyCard";
import "../pages/styles/FeaturedProperties.css";

function FeaturedProperties() {

  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetchFeaturedProperties();
  }, []);

  const fetchFeaturedProperties = async () => {
    try {

      const { data } = await axios.get(
        "http://localhost:5000/api/properties"
      );

      setProperties(data.slice(0, 3));

    } catch (error) {
      console.log(error);
    }
  };

  return (

    <section className="featured-section">

      <h2>Featured Properties</h2>

      <p>
        Explore our newest and most popular listings.
      </p>

      <div className="featured-grid">

        {properties.map((property) => (

          <PropertyCard
            key={property._id}
            property={property}
          />

        ))}

      </div>

    </section>

  );
}

export default FeaturedProperties;