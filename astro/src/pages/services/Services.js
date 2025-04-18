import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./services.css";
import { motion } from "framer-motion";
// Import your images here
import faultDetectionImage from '../../assests/solar1.webp';
import energyPredictionImage from '../../assests/solar2.webp';
import dataAnalysisImage from '../../assests/solar3.avif';
import predictiveMaintenanceImage from '../../assests/predictive-maintenance.jpg';
import { Link } from "react-router";



export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const [activeImage, setActiveImage] = useState(0);
  const images = [predictiveMaintenanceImage, dataAnalysisImage, energyPredictionImage, faultDetectionImage];

  const services = [
    { title: "fault detection", link: "/fault-detection" },
    { title: "energy predection", link: "/energy-predection" },
    { title: "data analysis dashpoard", link: "/data-analysis-dashpoard" },
    { title: "image classification", link: "/classification" },
    { title: "predictive mentance", link: "/predictive-mentance" },
    
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        
    
        <motion.h2 
          className="services-title" 
          data-aos="fade-up"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          We Find High & Best Use For All Resources
        </motion.h2>

        <p className="services-description" data-aos="fade-up" data-aos-delay="200">
          Discover innovative solutions for energy efficiency and sustainability.
        </p>

  
        <div className="services-content">
       
          <div className="services-text">
            {services.slice(0, 3).map((service, index) => (
              <motion.div 
                key={index} 
                className="service-item"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                data-aos="fade-right" 
                data-aos-delay={index * 100}
              >
                <h3>{service.title}</h3>
                <p>Explore innovative energy solutions.</p>
                <Link to={service.link} className="service-link">Learn More →</Link>
              </motion.div>
            ))}
          </div>

         
          <div className="services-image" data-aos="zoom-in">
            <motion.img 
              key={activeImage} 
              src={images[activeImage]} 
              alt="Solar Service"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            />
          </div>

        
          <div className="services-text">
            {services.slice(3, 5).map((service, index) => (
              <motion.div 
                key={index} 
                className="service-item"

whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                data-aos="fade-left" 
                data-aos-delay={index * 100}
              >
                <h3>{service.title}</h3>
                <p>Bringing efficiency to energy management.</p>
                <Link to={service.link} className="service-link">Learn More →</Link>
              </motion.div>
            ))}
          </div>
        </div>

     
        <motion.button 
          className="contact-button" 
          data-aos="fade-up" 
          data-aos-delay="300"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          CONTACT US
        </motion.button>

      </div>
    </section>
  );
}

