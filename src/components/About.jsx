// src/components/About.jsx
import React from "react";
import "./About.css";
const About = () => {
  return (
    <div className="about-container">
      <section className="about-header">
        <h1 className="about-title">About Us</h1>
        <p className="about-description">
          Welcome to Brick Tracker, your go-to platform for real-time real estate
          trends and data insights. We empower users with the most up-to-date
          information on property pricing, market trends, and real estate analytics.
        </p>
      </section>

      <section className="about-content">
        <div className="about-card">
          <h2>Our Mission</h2>
          <p>
            At Brick Tracker, our mission is to revolutionize the way people
            access and interpret real estate data. We aim to provide insights that
            help buyers, sellers, and investors make informed decisions.
          </p>
        </div>

        <div className="about-card">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>Real-time market insights</li>
            <li>Comprehensive property data</li>
            <li>Easy-to-use platform</li>
            <li>Expert recommendations and reports</li>
          </ul>
        </div>

        <div className="about-card">
          <h2>Contact Us</h2>
          <p>
            Have questions? Reach out to us at <strong>contact@bricktracker.com</strong>
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
