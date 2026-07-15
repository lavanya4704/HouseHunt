import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Login.css";
import toast from "react-hot-toast";
function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {

      const { data } = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password
        }
      );

      localStorage.setItem(
        "token",
        data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify({
          name: data.name,
          email: data.email
        })
      );

      toast.success("Welcome Back!");

      navigate("/");

    } catch (error) {

      alert(
  error.response?.data?.message ||
  "Login Failed"
);

    }
  };

  return (
    <div className="auth-container">

      <div className="auth-card">

        <h1>Login</h1>

        <form onSubmit={submitHandler}>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>
              setEmail(e.target.value)
            }
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>
              setPassword(e.target.value)
            }
            required
          />

          <button type="submit">
            Login
          </button>

        </form>

        <div className="auth-footer">
          New User?{" "}
          <Link to="/register">
            Register Here
          </Link>
        </div>

      </div>

    </div>
  );
}

export default Login;