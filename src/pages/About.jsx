import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-page animate-fade-in">
      <div className="about-card animate-fade-in-up">
        <span className="about-icon" role="img" aria-label="about">🏢</span>
        <h1>About Brick Tracker</h1>
        <p>
          Brick Tracker is a modern real estate market tracker built for students and property enthusiasts. Our mission is to make property price trends accessible and easy to understand for everyone.
        </p>
        <ul className="about-list">
          <li>✔️ Track property prices in major Indian cities</li>
          <li>✔️ Compare trends and make informed decisions</li>
          <li>✔️ Simple, secure, and free to use</li>
        </ul>
      </div>
    </div>
  );
}

export default About; 