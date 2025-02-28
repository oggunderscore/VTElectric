import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";
import logo from "../images/vt_logo_orange.avif";

const Banner = () => {
  return (
    <div className="banner-container">
      <header className="banner">
        {/* Logo on the Left */}
        <div className="banner-logo">
          <Link to="/">
            <img src={logo} alt="VT Electric Inc." />
          </Link>
        </div>

        {/* Navigation & Contact Button on the Right */}
        <div className="banner-right">
          <nav className="banner-nav">
            <Link to="/about" className="banner-link">
              About
            </Link>
            <Link to="/services" className="banner-link">
              Services
            </Link>
            <Link to="/projects" className="banner-link">
              Projects
            </Link>
          </nav>

          {/* Contact Button */}
          <Link to="/contact" className="contact-button">
            Contact Us
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Banner;
