import { useEffect, useState } from "react";
import axios from "axios";
import PropertyCard from "../components/PropertyCard";
import "../styles/Properties.css";

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    fetchWishlist();
  }, []);

  const fetchWishlist = async () => {
    try {
      const token = localStorage.getItem("token");

      const { data } = await axios.get(
        "http://localhost:5000/api/wishlist",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setWishlist(data);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="properties">

      <h1>❤️ My Wishlist</h1>

      <div className="property-grid">

        {wishlist.length === 0 ? (

          <h2>No properties in wishlist.</h2>

        ) : (

          wishlist.map((item) => (
            <PropertyCard
              key={item._id}
              property={item.property}
            />
          ))

        )}

      </div>

    </div>
  );
}

export default Wishlist;