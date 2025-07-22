import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

// Elegant, modern header with logo, nav, user info, and dark mode toggle
function Header({ userEmail, onLogout, darkMode, onToggleDarkMode }) {
  const location = useLocation();
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/contact", label: "Contact" },
    { to: "/market-trends", label: "Market Trends" },
  ];
  return (
    <header className="header sticky-header">
      <div className="header-content">
        {/* Modern logo with SVG icon */}
      <div className="logo">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo-svg">
            <rect x="6" y="14" width="20" height="12" rx="2" fill="var(--primary)"/>
            <polygon points="16,6 28,16 4,16" fill="var(--secondary)"/>
          </svg>
          <span className="logo-text">Brick<span className="logo-highlight">Tracker</span></span>
      </div>
        {/* Navigation with underline animation */}
        <nav>
          <ul className="nav-list">
            {navLinks.map(link => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={location.pathname === link.to ? "active" : ""}
                >
                  {link.label}
                  <span className="nav-underline"></span>
                </Link>
              </li>
            ))}
        </ul>
      </nav>
        {/* User info and dark mode toggle */}
        <div className="user-section">
          <button className="darkmode-toggle" onClick={onToggleDarkMode} title="Toggle dark mode">
            {darkMode ? (
              <span role="img" aria-label="Light mode">🌞</span>
            ) : (
              <span role="img" aria-label="Dark mode">🌙</span>
            )}
          </button>
          {userEmail ? (
            <>
              <span className="user-email">👤 {userEmail}</span>
              <button className="logout-btn" onClick={onLogout}>Logout</button>
            </>
          ) : (
            <span className="user-email">Not logged in</span>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
