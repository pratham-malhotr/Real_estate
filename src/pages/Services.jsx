import React from 'react';
import './Services.css';

function Services() {
  return (
    <div className="services-page animate-fade-in">
      <h1>Our Services</h1>
      <div className="services-cards animate-fade-in-up">
        <div className="service-card">
          <span role="img" aria-label="track">📈</span>
          <h3>Market Price Tracking</h3>
          <p>Get the latest property prices for top Indian cities, updated regularly.</p>
        </div>
        <div className="service-card">
          <span role="img" aria-label="analysis">🔍</span>
          <h3>Trend Analysis</h3>
          <p>Analyze market trends and make smarter investment decisions.</p>
        </div>
        <div className="service-card">
          <span role="img" aria-label="compare">⚖️</span>
          <h3>City Comparison</h3>
          <p>Compare property prices and trends across multiple cities easily.</p>
        </div>
      </div>
    </div>
  );
}

export default Services; 