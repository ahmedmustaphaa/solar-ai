import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiAlertOctagon } from "react-icons/fi";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for the sidebar
import './navbar.css'; // Import CSS file
import imgage from '../../assests/solari_logo.svg'
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="left">
        
        <Link to="/">   <img src={imgage} style={{height:'100px',width:'140px'}}></img></Link>
      </div>

      {/* Mobile dropdown menu */}
      <div className={`center ${isOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
        <Link to="/guide" onClick={() => setIsOpen(false)}>Guide</Link>
        <Link to="/soltain" onClick={() => setIsOpen(false)}>Soltain</Link>
      </div>

      <div className="right">
        <Link to="/contact">
          <button className="contact-btn">Contact Us</button>
        </Link>
 

 
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      </div>
    </nav>
  );
}

export default Navbar;