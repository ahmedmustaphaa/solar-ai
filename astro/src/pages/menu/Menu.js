import React from "react";
import "./menu.css"; // Import the CSS file
import { FaPerson } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { GiQueenCrown } from "react-icons/gi";
import { FaStar } from "react-icons/fa";
import  { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";


import workersImage from "../../assests/fault-detection.jpg"; // صورة العمال مع الألواح الشمسية
import houseImage from "../../assests/energy-prediction.jpg"; // صورة المنزل بالطاقة الشمسية

export default function SolarSolutions() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="solar-solutions">
      <div className="container">
    
        <div className="content">
          <motion.div 
            className="text-section" 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1 }}
          >
            <h1 data-aos="fade-up">Sun-Powered Solutions for Every Home</h1>
            <p data-aos="fade-up" data-aos-delay="200">
            Sun-Powered Solutions for Every Home" sounds like a fantastic initiative! Using solar energy for home solutions is not only sustainable but can also reduce utility costs. Solar power offers a range of solutions that can be applied to various home needs. Here are a few examples:

            Solar Panels – The most common application of solar energy. Solar panels can generate electricity, which can power everything from lights to appliances.
        
            Solar Water Heaters – These systems use the sun’s energy to heat water for household use, reducing dependence on gas or electric water heaters.
        
            Solar Lighting – Outdoor solar lights for gardens, pathways, or driveways that use solar energy to illuminate without relying on grid electricity.
        
            Solar Roof Tiles – For homeowners looking for a more aesthetically pleasing option, solar roof tiles can generate energy while blending seamlessly into the roof.
        
            Solar-Powered Ventilation Systems – Solar attic fans or ventilation systems that help regulate temperature and air quality without using conventional electricity.
        
            </p>
         
          </motion.div>

          <motion.div 
            className="image-section" 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }}
          >
            <img src={workersImage} alt="Solar Workers" data-aos="zoom-in" />
          </motion.div>
        </div>

        {/* القسم الثاني - الميزات */}
        <div className="specialty-section">
          <motion.div 
            className="specialty-text" 
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1 }}
          >
            <h2 data-aos="fade-up">Our Specialty</h2>
            <ul>
              <li data-aos="fade-right">1- Sustainable Freedom</li>
              <li data-aos="fade-left">2- Reduce Power Bills</li>
              <li data-aos="fade-right">3- Property Value</li>
              <li data-aos="fade-left">4- Green Energy</li>
            </ul>
          </motion.div>

          <motion.div 
            className="image-section" 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }}
          >
            <img src={houseImage} alt="Solar House" data-aos="zoom-in" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
