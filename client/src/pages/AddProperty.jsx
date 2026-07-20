import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import "./styles/AddProperty.css";

function AddProperty() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    location: "",
    price: "",
    bedrooms: "",
    bathrooms: "",
    description: "",
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    if (!token) {
      toast.error("Please login first");
      return;
    }

    if (!image) {
      toast.error("Please select an image");
      return;
    }

    try {
      setLoading(true);

      const data = new FormData();

      data.append("title", formData.title);
      data.append("location", formData.location);
      data.append("price", formData.price);
      data.append("bedrooms", formData.bedrooms);
      data.append("bathrooms", formData.bathrooms);
      data.append("description", formData.description);
      data.append("image", image);

      await axios.post(
        "http://localhost:5000/api/properties",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.success("Property Added Successfully");

      // Reset Form
      setFormData({
        title: "",
        location: "",
        price: "",
        bedrooms: "",
        bathrooms: "",
        description: "",
      });

      setImage(null);
      setPreview("");

      const imageInput = document.getElementById("imageInput");
      if (imageInput) {
        imageInput.value = "";
      }

      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);

    } catch (error) {
      console.error(error);

      toast.error(
        error.response?.data?.message ||
          "Unable to Add Property"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-property-container">

      <form
        className="property-form"
        onSubmit={handleSubmit}
      >

        <h1>Add Property</h1>

        <input
          type="text"
          name="title"
          placeholder="🏠 Property Title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="location"
          placeholder="📍 Location"
          value={formData.location}
          onChange={handleChange}
          required
        />

        <div className="form-row">

          <input
            type="number"
            name="price"
            placeholder="💰 Price"
            value={formData.price}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="bedrooms"
            placeholder="🛏 Bedrooms"
            value={formData.bedrooms}
            onChange={handleChange}
            required
          />

        </div>

        <div className="form-row">

          <input
            type="number"
            name="bathrooms"
            placeholder="🛁 Bathrooms"
            value={formData.bathrooms}
            onChange={handleChange}
            required
          />

          <input
            id="imageInput"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
          />

        </div>

        {preview && (
          <div className="image-preview">
            <img
              src={preview}
              alt="Preview"
            />
          </div>
        )}

        <textarea
          name="description"
          placeholder="📝 Property Description"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          disabled={loading}
        >
          {loading ? "Uploading..." : "Add Property"}
        </button>

      </form>

    </div>
  );
}

export default AddProperty;