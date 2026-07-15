import "../styles/Stats.css";

function Stats() {
  return (
    <section className="stats">

      <h2>Our Achievements</h2>

      <div className="stats-grid">

        <div className="stat-card">
          <h1>500+</h1>
          <p>Properties Listed</p>
        </div>

        <div className="stat-card">
          <h1>250+</h1>
          <p>Happy Customers</p>
        </div>

        <div className="stat-card">
          <h1>50+</h1>
          <p>Cities Covered</p>
        </div>

        <div className="stat-card">
          <h1>24/7</h1>
          <p>Customer Support</p>
        </div>

      </div>
    </section>
  );
}

export default Stats;