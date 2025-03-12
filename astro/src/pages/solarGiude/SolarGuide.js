import React, { useState } from "react";
import { motion } from "framer-motion";
import "./solarGuide.css"; // Design file

const faqData = [
  {
    question: "How does solar energy work?",
    answer:
      "Solar energy is harnessed through photovoltaic (PV) cells, typically made of silicon. When sunlight strikes these cells, it excites electrons and generates a direct current (DC). This DC electricity is then converted to alternating current (AC) by an inverter, making it usable for homes and businesses. The electricity produced can power appliances or be fed back into the grid, and excess energy can be stored in batteries for later use.",
  },
  {
    question: "How much does a solar energy system cost?",
    answer:
      "The cost of a solar energy system varies based on factors such as system size, location, type of panels, and installation complexity. As of late 2023, the average cost for a residential solar panel installation in the U.S. ranges from $15,000 to $30,000 before tax credits and incentives, which can significantly reduce the overall cost.",
  },
  {
    question: "What maintenance is required for solar panels?",
    answer:
      "As of late 2023, the cost of a solar energy system for residential installations in the United States typically ranges from $15,000 to $30,000 before any tax credits or incentives. The final price can vary based on several factors, including:",
  },
  {
    question: "What is net metering, and how does it work?",
    answer:
      "Net metering is a billing arrangement that allows residential and commercial customers who generate their own electricity (typically through renewable energy sources like solar panels) to receive credit for the excess electricity they produce and feed back into the grid. Here’s how it works:",
  },
  {
    question: "What are the benefits of installing solar panels?",
    answer:
      "Reduced Electricity Bills: Solar panels can significantly lower your electricity costs by generating your own power, which reduces reliance on the grid.",
  },
  {
    question: "How long do solar panels last?",
    answer:
      "Solar panels typically have a lifespan of 25 to 30 years or more. Most manufacturers provide warranties that guarantee performance for at least 25 years; however, many panels continue to produce electricity beyond this period at reduced efficiency levels (often around 80% of their original capacity). Regular maintenance and proper installation can help maximize their lifespan and efficiency over time.",
  },
  {
    question: "Can I completely go off-grid with solar energy?",
    answer:
      "Going off-grid requires a battery storage system to store excess energy for nighttime use.Yes, it is possible to go completely off-grid with solar energy, and many people successfully do so. Here are the key components and considerations for setting up an off-grid solar system:",
  },
  {
    question: "Do I need a solar battery storage system?",
    answer:
      "Battery storage is optional but useful for backup power and off-grid setups. solar energy is feasible with careful planning and consideration of your specific needs and circumstances. While battery storage is optional, it significantly enhances reliability by providing backup power when needed",
  },
];

const SolarGuide = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div 
      className="solar-guide"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="toptitle">Your Guide to Solar Solutions</div>
      <p className="subtitle">
        Explore everything you need to know about solar energy, from installation to savings.
      </p>

      <div className="faq-container">
        {faqData.map((item, index) => (
          <motion.div
            key={index}
            className={`faq-item ${openIndex === index ? "open" : ""}`}
            onClick={() => toggleAccordion(index)}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="faq-question">{item.question}</div>
            <motion.div
              className="faq-answer"
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: openIndex === index ? "auto" : 0,
                opacity: openIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.4 }}
            >
              {item.answer}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SolarGuide;