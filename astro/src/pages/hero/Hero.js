import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import "./hero.css";

// استيراد الصورة
import solarImage from "../../assests/men.avif";

export default function DrivingChange() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 } 
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <section className="driving-change">
      <div className="container">
    
        <motion.div 
          className="text-content" 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
        >
          <h1 data-aos="fade-up">Driving Change with Renewable Energy</h1>
          <p data-aos="fade-up" data-aos-delay="200">
            Empowering a sustainable future through innovative renewable energy solutions. 
            Together, we can make a difference—transforming the way we power our world with clean, green, 
            and efficient energy solutions.
          </p>
        </motion.div>

        <div className="hero-section">
          <motion.div 
            className="image-content" 
            ref={imageRef}
            animate={{ height: isVisible ? 400 : 0 }} 
            transition={{ duration: 0.5}}
          >
            <img src={solarImage} alt="Solar Worker" />
          </motion.div>

          {/* القيم */}
          <div className="values">
            <motion.div className="value-box" data-aos="fade-right">
              <h3>Energy Dependence</h3>
              <p>Reducing reliance on non-renewable resources to create a more sustainable energy future.</p>
            </motion.div>

            <motion.div className="value-box" data-aos="fade-left">
              <h3>Eco Impact</h3>
              <p>Minimizing environmental impact by leveraging sustainable and eco-friendly energy solutions.</p>
            </motion.div>

            <motion.div className="value-box" data-aos="fade-right">
              <h3>Clean Energy</h3>
              <p>Capturing the power of renewable resources to create sustainable and eco-friendly energy solutions.</p>
            </motion.div>

            <motion.div className="value-box" data-aos="fade-left">
              <h3>Preserve Nature</h3>
              <p>Protecting natural ecosystems through sustainable practices and responsible energy solutions.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
