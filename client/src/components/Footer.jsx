import "../pages/styles/Footer.css";

function Footer() {

  return (

    <footer className="footer">

      <h2>🏠 HouseHunt</h2>

      <p>
        Find your dream home with confidence.
      </p>

      <div className="footer-links">

        <a href="/">Home</a>

        <a href="/properties">
          Properties
        </a>

        <a href="/login">
          Login
        </a>

        <a href="/register">
          Register
        </a>

      </div>

      <p className="copyright">
        © 2026 HouseHunt. All Rights Reserved.
      </p>

    </footer>

  );
}

export default Footer;