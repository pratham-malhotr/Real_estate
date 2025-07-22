import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        {/* Animated SVG blobs background */}
        <svg className="blobs-bg" viewBox="0 0 1440 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="300" cy="200" rx="220" ry="120" fill="#e52e71" fillOpacity="0.18">
            <animate attributeName="cx" values="300;400;300" dur="8s" repeatCount="indefinite"/>
          </ellipse>
          <ellipse cx="1100" cy="180" rx="180" ry="100" fill="#ff8a00" fillOpacity="0.13">
            <animate attributeName="cy" values="180;250;180" dur="7s" repeatCount="indefinite"/>
          </ellipse>
          <ellipse cx="700" cy="320" rx="300" ry="80" fill="#43e97b" fillOpacity="0.10">
            <animate attributeName="rx" values="300;350;300" dur="10s" repeatCount="indefinite"/>
          </ellipse>
        </svg>
        {/* Small animated SVG shape for extra effect */}
        <svg className="animated-shape" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="60" cy="60" r="50" fill="#fff" fillOpacity="0.18" />
          <circle cx="60" cy="60" r="30" fill="#e52e71" fillOpacity="0.18" />
        </svg>
        <div className="hero-content">
          <h1>Find Your Dream Property</h1>
          <p>Track, compare, and analyze real estate prices across India with ease.</p>
          <a href="/market-trends" className="cta-btn">View Market Trends</a>
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

