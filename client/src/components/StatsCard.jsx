import "../styles/StatsCard.css";

function StatsCard({ title, value, icon }) {
  return (
    <div className="stats-card">
      <div className="stats-icon">{icon}</div>

      <h2>{value}</h2>

      <p>{title}</p>
    </div>
  );
}

export default StatsCard;