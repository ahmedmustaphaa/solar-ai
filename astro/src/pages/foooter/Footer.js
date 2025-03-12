import React, { useEffect } from "react";
import "./footer.css";
import { FaTwitter, FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

function Footer() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <footer className="footer">
      <div className="wave-container">
        <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#002244" fillOpacity="1" d="M0,288L48,266.7C96,245,192,203,288,192C384,181,480,203,576,192C672,181,768,139,864,138.7C960,139,1056,181,1152,202.7C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <div className="footer-container">
        <div className="footer-section">
          <h2>SOLAR TECH</h2>
          <p>Innovating the future of solar energy.</p>
        </div>

        <div className="footer-section">
          <h3>GET STARTED</h3>
          <ul>
            <li>Start</li>
            <li>Documentation</li>
            <li>Installation</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>COMPANY</h3>
          <ul>
            <li>Contact</li>
            <li>News</li>
            <li>Careers</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>QUICK LINKS</h3>
          <ul>
            <li>Support Center</li>
            <li>Service Status</li>
            <li>Security</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>LET'S CHAT</h3>
          <p>Have a support question?</p>
          <button className="footer-button">GET IN TOUCH</button>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <FaLinkedin className="icon" />
            <FaTwitter className="icon" />
            <FaYoutube className="icon" />
            <FaGithub className="icon" />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Solar Tech. Designed by Ahmed Mostafa. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;