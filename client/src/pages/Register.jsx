import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./styles/Login.css";
import toast from "react-hot-toast";

function Register() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {

      const { data } = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          name,
          email,
          phone,
          password,
        }
      );

      localStorage.setItem("token", data.token);

      localStorage.setItem(
        "user",
        JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
        })
      );

      toast.success("Registration Successful");

      navigate("/");

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Registration Failed"
      );

    }
  };

  return (
    <div className="auth-container">

      <div className="auth-card">

        <h1>Register</h1>

        <form onSubmit={submitHandler}>

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">
            Register
          </button>

        </form>

        <div className="auth-footer">
          Already have an account?{" "}
          <Link to="/login">
            Login Here
          </Link>
        </div>

      </div>

    </div>
  );
}

export default Register;