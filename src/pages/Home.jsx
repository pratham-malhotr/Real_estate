import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-page">
      {/* Animated SVG wave at top */}
      <svg className="wave-top" viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M0 30 Q 360 0 720 30 T 1440 30 V0 H0 V30Z" fill="#fff" fillOpacity="0.8"/>
      </svg>
      <section className="hero-section animate-fade-in">
        <div className="hero-content">
          <h1>Find Your Dream Property</h1>
          <p>Track, compare, and analyze real estate prices across India with ease.</p>
          <a href="/market-trends" className="cta-btn">View Market Trends</a>
        </div>
        {/* Animated SVG wave at bottom */}
        <svg className="wave" viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 30 Q 360 60 720 30 T 1440 30 V60 H0 V30Z" fill="#fff" fillOpacity="0.8"/>
        </svg>
      </section>
      <section className="features-section animate-fade-in-up">
        <div className="feature-card">
          <span role="img" aria-label="price">💰</span>
          <h3>Track Prices</h3>
          <p>Stay updated with the latest property prices in top cities.</p>
        </div>
        <div className="feature-card">
          <span role="img" aria-label="compare">📊</span>
          <h3>Compare Cities</h3>
          <p>Compare real estate trends and make informed decisions.</p>
        </div>
        <div className="feature-card">
          <span role="img" aria-label="secure">🔒</span>
          <h3>Secure & Simple</h3>
          <p>Easy sign up and login to access exclusive market data.</p>
        </div>
      </section>
    </div>
  );
}

export default Home; 