import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./styles/EditProperty.css";
import toast from "react-hot-toast";
function EditProperty() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    location: "",
    price: "",
    bedrooms: "",
    bathrooms: "",
    description: "",
    image: ""
  });

  useEffect(() => {
    fetchProperty();
  }, []);

  const fetchProperty = async () => {
    try {

      const { data } = await axios.get(
        `http://localhost:5000/api/properties/${id}`
      );

      setFormData({
        title: data.title || "",
        location: data.location || "",
        price: data.price || "",
        bedrooms: data.bedrooms || "",
        bathrooms: data.bathrooms || "",
        description: data.description || "",
        image: data.image || ""
      });

    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    const token = localStorage.getItem("token");

    try {

      await axios.put(
        `http://localhost:5000/api/properties/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      toast.success("Property Updated Successfully");

      navigate("/dashboard");

    } catch (error) {

      toast.error("Update Failed");

    }

  };

  return (
    <div className="edit-property">

      <div className="edit-card">

        <h1>Edit Property</h1>

        <form onSubmit={handleSubmit}>

          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
          />

          <input
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Location"
          />

          <input
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Price"
          />

          <input
            name="bedrooms"
            value={formData.bedrooms}
            onChange={handleChange}
            placeholder="Bedrooms"
          />

          <input
            name="bathrooms"
            value={formData.bathrooms}
            onChange={handleChange}
            placeholder="Bathrooms"
          />

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
          />

          <input
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Image URL"
          />

          <button type="submit">
            Update Property
          </button>

        </form>

      </div>

    </div>
  );
}

export default EditProperty;