import React, { useEffect } from "react";
import "./contact.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaUser, FaComment } from "react-icons/fa";

const ContactUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="contact-container">
      {/* العنوان الرئيسي */}
      <motion.h1
        className="contact-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Contact Us
      </motion.h1>

      {/* معلومات التواصل */}
      <div className="contact-info-container">
        <motion.div className="contact-info-box" data-aos="fade-up">
          <FaPhoneAlt className="icon" />
          <p>01204579687</p>
        </motion.div>
        <motion.div className="contact-info-box" data-aos="fade-up">
          <FaEnvelope className="icon" />
          <p>ahmedmos@gmail.com</p>
        </motion.div>
        <motion.div className="contact-info-box" data-aos="fade-up">
          <FaMapMarkerAlt className="icon" />
          <p>baltim borg, City, Country</p>
        </motion.div>
      </div>

      {/* نموذج الاتصال */}
      <div className="contact-content">
        <motion.form className="contact-form" data-aos="fade-left">
          <div className="input-group">
            <FaUser className="input-icon" />
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="input-group">
            <FaEnvelope className="input-icon" />
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="input-group">
            <FaPhoneAlt className="input-icon" />
            <input type="tel" placeholder="Your Phone" required />
          </div>
          <div className="input-group">
            <FaComment className="input-icon" />
            <textarea placeholder="Your Message" required></textarea>
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="submit"
          >
            Submit
          </motion.button>
        </motion.form>

        {/* خريطة أو صورة */}
        <motion.div className="contact-map" data-aos="fade-right">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345086204!2d144.95373531531667!3d-37.81627974202198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1d7a7df%3A0x5045675218ce7e33!2sMelbourne%2C%20Australia!5e0!3m2!1sen!2sus!4v1614192794944!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;
