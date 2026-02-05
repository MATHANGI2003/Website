// src/components/Footer.jsx

import React from 'react';
import logo from "../assets/images/logo.jpg";
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <img src={logo} alt="CeiTCS Logo" className="footer-logo" />
          <h3>24/7 CALL US</h3>
          <p className="footerp">📞 🇮🇳 +91 9790835693</p>
          <p className="footerp">📞 🇮🇳 +91 9791424421</p>
          <p className="footerp">📞 🇦🇪 +971 545313855</p>
          <h3>24/7 OUR LOCATION</h3>
          <p className="footerp"><strong>F3 Plot Number 36</strong></p>
          <p className="footerp">Ranganathan Nagar Second Street,</p>
          <p className="footerp">Selaiyur, Tambaram, Chennai - 600073</p>
        </div>

        <div className="footer-middle">
          <h3>Quick Links</h3>
          <ul>
            <li className="nav-item"><a className="nav-link" href="/home">➤ Home</a></li>
            <li className="nav-item"><a className="nav-link" href="/about">➤ About Us</a></li>
            <li className="nav-item"><a className="nav-link" href="/features">➤ Features</a></li>
            <li className="nav-item"><a className="nav-link" href="/services">➤ Services</a></li>
            <li className="nav-item"><a className="nav-link" href="/blog">➤ Blog</a></li>
            <li className="nav-item"><a className="nav-link" href="/contact">➤ Contact Us</a></li>
            <li className="nav-item"><a className="nav-link" href="/experts">➤ Experts</a></li>
            <li className="nav-item"><a className="nav-link" href="/careers">➤ Careers</a></li>
          </ul>
        </div>

        <div className="footer-services">
          <h3>Services</h3>
          <ul>
            <li>➤ Digital Transformation</li>
            <li>➤ Business Intelligence</li>
            <li>➤ Analytics and Data Science</li>
            <li>➤ Cybersecurity</li>
            <li>➤ AI & Emerging Technology</li>
            <li>➤ Customer Analytics</li>
            <li>➤ Data Management & Mining</li>
            <li>➤ Innovation & Data Architects</li>
            <li>➤ IT Compliance & Governance</li>
          </ul>
        </div>

        <div className="footer-right">
          <h3>Features</h3>
          <ul>
            <li>➤ AI and Cybersecurity</li>
            <li>➤ AI and Healthcare</li>
            <li>➤ SAP MM</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footerp">© Copyright 2024. All rights reserved. CeiTCS.</p>
        <div className="social-icons">
          <button>📘 Facebook</button>
          <button>🐦 Twitter</button>
          <button>📸 Instagram</button>
          <button>🔗 LinkedIn</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
