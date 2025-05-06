import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1>
            Welcome to <span>Brick Tracker</span>
          </h1>
          <p>
            Your trusted partner in tracking real estate trends, prices, and opportunities in real time.
          </p>
          <a href="/trends" className="cta-button">
            Explore Market Trends
          </a>
        </div>
      </section>

      <section className="features-section">
        <h2>Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Live Price Updates</h3>
            <p>Stay updated with dynamic property price changes across top cities.</p>
          </div>
          <div className="feature-card">
            <h3>Regional Deep-Dive</h3>
            <p>Explore comprehensive data insights tailored to specific regions.</p>
          </div>
          <div className="feature-card">
            <h3>Trusted Market Reports</h3>
            <p>Access expert-vetted trends and predictions to guide your investments.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

