import { Link, useNavigate } from "react-router-dom";
import "../pages/styles/Navbar.css";

function Navbar() {

  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const logout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");

  };

  return (

    <nav className="navbar">

      <Link
        to="/"
        className="logo"
      >
        🏠 HouseHunt
      </Link>

      <div className="nav-links">

        <Link to="/">Home</Link>

        <Link to="/properties">
          Properties
        </Link>
        <Link to="/dashboard">
    Dashboard
</Link>
        {user && (

          <Link to="/add-property">
            Add Property
          </Link>

        )}

      </div>

      <div className="nav-right">

        {user ? (

          <>

            <span className="welcome">

              Welcome,
              <b> {user.name}</b>

            </span>

            <button
              className="logout-btn"
              onClick={logout}
            >
              Logout
            </button>

          </>

        ) : (

          <>

            <Link to="/login">

              <button className="login-btn">

                Login

              </button>

            </Link>

            <Link to="/register">

              <button className="register-btn">

                Register

              </button>

            </Link>

          </>

        )}

      </div>

    </nav>

  );

}

export default Navbar;