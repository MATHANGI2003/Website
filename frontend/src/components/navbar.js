// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/images/logo.jpg";
import Chatbox from "../components/chatbox";
import "../styles/navbar.css";

const Navbar = () => {
  const [showChat, setShowChat] = useState(false);

  const handleChatToggle = () => {
    setShowChat(prev => !prev);
  };

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="CeiTCS Logo" />
      </div>
      <nav>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/features">Features</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/experts">Experts</Link></li>
          <li><Link to="/careers">Careers</Link></li>
        </ul>
      </nav>
      <div className="quote-container">
        <button className="quote-btn" onClick={handleChatToggle}>
          Get Quote
        </button>
        {showChat && <Chatbox />}
      </div>
    </header>
  );
};

export default Navbar;