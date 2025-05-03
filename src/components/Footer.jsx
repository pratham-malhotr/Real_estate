import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="realestate-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h2>Brick Tracker</h2>
          <p>Stay ahead with real-time insights on real estate trends and pricing.</p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/trends">Market Trends</a></li>
            <li><a href="/regions">Regional Data</a></li>
            <li><a href="/reports">Reports</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <h4>Connect With Us</h4>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} MarketTracker. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
