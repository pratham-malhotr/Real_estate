import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      {/* SVG wave at top of footer */}
      <svg className="footer-wave" viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M0 30 Q 360 0 720 30 T 1440 30 V0 H0 V30Z" fill="#fff" fillOpacity="0.8"/>
      </svg>
      <div className="footer-content">
        <span>© {new Date().getFullYear()} Brick Tracker. All rights reserved.</span>
        <span className="footer-links">
          <a href="/about">About</a> | <a href="/contact">Contact</a>
        </span>
        <div className="footer-social">
          <a href="#" title="Instagram" className="footer-social-icon" aria-label="Instagram">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5" stroke="var(--primary)" strokeWidth="2"/><circle cx="12" cy="12" r="4" stroke="var(--primary)" strokeWidth="2"/><circle cx="17" cy="7" r="1.2" fill="var(--primary)"/></svg>
          </a>
          <a href="#" title="Twitter" className="footer-social-icon" aria-label="Twitter">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M22 5.92a8.38 8.38 0 01-2.36.65A4.13 4.13 0 0021.4 4.1a8.19 8.19 0 01-2.6 1A4.11 4.11 0 0012 8.09c0 .32.04.64.1.94A11.65 11.65 0 013 4.89a4.11 4.11 0 001.27 5.48A4.07 4.07 0 012.8 9.1v.05a4.11 4.11 0 003.3 4.03c-.3.08-.62.13-.95.13-.23 0-.45-.02-.67-.06a4.13 4.13 0 003.84 2.85A8.24 8.24 0 012 19.54a11.62 11.62 0 006.29 1.84c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0022 5.92z" stroke="var(--primary)" strokeWidth="2"/></svg>
          </a>
          <a href="#" title="LinkedIn" className="footer-social-icon" aria-label="LinkedIn">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" stroke="var(--primary)" strokeWidth="2"/><path d="M7 10v7" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round"/><circle cx="7" cy="7" r="1.2" fill="var(--primary)"/><path d="M10.5 13.5V17M10.5 13.5c0-1.1.9-2 2-2s2 .9 2 2V17M14.5 13.5V17" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round"/></svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
