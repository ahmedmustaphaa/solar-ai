import React, { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaChevronUp } from "react-icons/fa"; // Importing the up arrow icon
import "./home.css";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(() => {
    return localStorage.getItem("modalOpen") === "true";
  });

  useEffect(() => {
    const ele = document.getElementById('scrollToTopBtn');
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      ele.style.display = scrollTop > 800 ? 'block' : 'none';
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    localStorage.setItem("modalOpen", isModalOpen);
  }, [isModalOpen]);

  const handleLearnMoreClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const modalAnimation = useSpring({
    opacity: isModalOpen ? 1 : 0,
    transform: isModalOpen ? "scale(1)" : "scale(0.8)",
    config: { tension: 200, friction: 20 },
  });

  const overlayAnimation = useSpring({
    opacity: isModalOpen ? 1 : 0,
    config: { tension: 200, friction: 20 },
  });

  return (
    <div className="home">
      {/* Background Video */}
      <video autoPlay loop muted className="bg-video">
        <source src={require('../../assests/back.mp4')} type="video/mp4" />
      </video>

      {/* Introduction Section */}
      <div className="overlay" data-aos="fade-up">
        <h1 className="title">
          Harness the <span className="highlight">Power of</span> the Sun
        </h1>
        <p className="subtitle">
          Solar panels are a renewable source of energy that can reduce your electricity bills, minimize your carbon footprint, and help you save money in the long term.
        </p>
        <button className="learn-more-btn" onClick={handleLearnMoreClick}>
          Learn More
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <animated.div className="modal-overlay" style={overlayAnimation}>
          <animated.div className="modal" style={modalAnimation}>
            <div className="modal-content">
              <h2>Why Choose Solar Panels?</h2>
              <p>Solar panels are a renewable source of energy that can reduce your electricity bills, minimize your carbon footprint, and help you save money in the long term.</p>
              <button className="close-btn" onClick={closeModal}>Close</button>
            </div>
          </animated.div>
        </animated.div>
      )}
      
      {/* Scroll to Top Button */}
      <div className="scroll-to-top" id="scrollToTopBtn" onClick={handleTop}>
        <FaChevronUp />
      </div>
    </div>
  );
}

export default Home;