import "../styles/Testimonials.css";

function Testimonials() {

  return (

    <section className="testimonials">

      <h2>What Our Customers Say</h2>

      <div className="testimonial-grid">

        <div className="testimonial-card">

          <h3>⭐⭐⭐⭐⭐</h3>

          <p>
            HouseHunt made finding my dream apartment
            incredibly easy. The listings were genuine
            and the process was smooth.
          </p>

          <h4>- Priya</h4>

        </div>

        <div className="testimonial-card">

          <h3>⭐⭐⭐⭐⭐</h3>

          <p>
            A beautiful platform with excellent
            property options. Highly recommended.
          </p>

          <h4>- Rahul</h4>

        </div>

        <div className="testimonial-card">

          <h3>⭐⭐⭐⭐⭐</h3>

          <p>
            I listed my property and received enquiries
            within a few days.
          </p>

          <h4>- Sneha</h4>

        </div>

      </div>

    </section>

  );
}

export default Testimonials;