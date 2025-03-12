import React, { useEffect } from 'react';
import './about.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import { FaSolarPanel, FaLeaf, FaBolt, FaCheck, FaTools, FaHeadset } from 'react-icons/fa'; // Import additional icons
import menImage from '../../assests/men.avif'; 

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const imageAnimation = useSpring({
    from: { height: "0px", opacity: 0 },
    to: { height: imageInView ? "500px" : "0px", opacity: imageInView ? 1 : 0 },
    config: { tension: 200, friction: 30 },
  });

  return (
    <div className="about-section">
      <div className="about-image-container" ref={imageRef}>
        <animated.img src={menImage} alt="Solar Panel Service" className="about-image" style={imageAnimation} />
      </div>

      <div className="about-content">
        <h1 className="about-title" data-aos="fade-up">35 Years Of Experience In Solar Panels Service</h1>
        <p className="about-description" data-aos="fade-up" data-aos-delay="200">
          We provide high-quality solar panel installation, maintenance, and energy solutions to help you save costs and protect the environment.
        </p>

        <div className="stats-container">
          <div className="stat-box" data-aos="zoom-in" data-aos-delay="400">
            <FaSolarPanel className="stat-icon" />
            <h2 style={{color:'#00aeef'}}>5000+</h2>
            <p>Installed Panels</p>
          </div>
          <div className="stat-box" data-aos="zoom-in" data-aos-delay="600">
            <FaLeaf className="stat-icon" />
            <h2 style={{color:'#00aeef'}}>100% Eco-Friendly</h2>
            <p>Sustainable Solutions</p>
          </div>
          <div className="stat-box" data-aos="zoom-in" data-aos-delay="800">
            <FaBolt className="stat-icon" />
            <h2 style={{color:'#00aeef'}}>24/7</h2>
            <p>Energy Support</p>
          </div>
        </div>

        <div className="info-box" data-aos="fade-up" data-aos-delay="1000">
          <h3>Why Choose Us?</h3>
          <ul>
            <li><FaCheck className="icon" /> Certified and experienced professionals.</li>
            <li><FaTools className="icon" /> Cutting-edge solar technology.</li>
            <li><FaLeaf className="icon" /> Cost-effective and energy-efficient solutions.</li>
            <li><FaHeadset className="icon" /> 24/7 customer support and maintenance.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;