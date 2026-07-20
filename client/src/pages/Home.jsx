import { Link } from "react-router-dom";

import "./styles/Home.css";

import FeaturedProperties from "../components/FeaturedProperties";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";


function Home() {

  return (

    <div className="home">


      {/* ==========================
          HERO SECTION
      ========================== */}

      <section className="hero">

        <div className="hero-overlay">


          <h1>
            Find Your Dream Home
          </h1>


          <p>
            Discover apartments, villas, and houses
            at the best locations with HouseHunt.
          </p>


          <SearchBar />


          <div className="hero-buttons">


            <Link to="/properties">

              <button className="primary-btn">
                Browse Properties
              </button>

            </Link>



            <Link to="/register">

              <button className="secondary-btn">
                Get Started
              </button>

            </Link>


          </div>


        </div>


      </section>





      {/* ==========================
          WHY CHOOSE US
      ========================== */}


      <section className="features">


        <h2>
          Why Choose HouseHunt?
        </h2>



        <div className="feature-grid">


          <div className="feature-card">

            <h3>
              🏠 Verified Properties
            </h3>

            <p>
              Every listing is verified for quality
              and authenticity.
            </p>

          </div>




          <div className="feature-card">

            <h3>
              💰 Affordable Prices
            </h3>

            <p>
              Find homes that match your budget.
            </p>

          </div>





          <div className="feature-card">

            <h3>
              📍 Prime Locations
            </h3>

            <p>
              Search properties in the best cities.
            </p>

          </div>





          <div className="feature-card">

            <h3>
              🔒 Secure Platform
            </h3>

            <p>
              Safe authentication and trusted owners.
            </p>

          </div>



        </div>


      </section>





      {/* ==========================
          FEATURED PROPERTIES
      ========================== */}


      <FeaturedProperties />





      {/* ==========================
          PROPERTY CATEGORIES
      ========================== */}


      <Categories />





      {/* ==========================
          ACHIEVEMENTS
      ========================== */}


      <Stats />





      {/* ==========================
          TESTIMONIALS
      ========================== */}


      <Testimonials />





      {/* ==========================
          FOOTER
      ========================== */}


      <Footer />


    </div>

  );

}


export default Home;