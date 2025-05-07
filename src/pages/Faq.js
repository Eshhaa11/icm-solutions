// src/components/FAQ.jsx
import React, { useState } from "react";
import "../styles/Faq.css";

const faqs = [
  {
    question: "What types of seeds does ICM offer?",
    answer:
      "ICM provides a wide range of certified seeds including hybrid, organic, and high-yield varieties suitable for various climates and soils."
  },
  {
    question: "Are the seeds tested for quality?",
    answer:
      "Yes, all our seeds undergo rigorous germination and purity tests in accredited labs to ensure quality and reliability."
  },
  {
    question: "Can I get farming guidance with my seed purchase?",
    answer:
      "Absolutely! Our team provides expert agricultural advice including planting methods, fertilization, and pest control support."
  },
  {
    question: "Do you deliver across India?",
    answer:
      "Yes, we offer reliable shipping across India with tracking and usually dispatch orders within 3–5 business days."
  },
  {
    question: "Can I return seeds if the packet is damaged?",
    answer:
      "Yes, if your seeds arrive damaged or incorrect, you can request a return or exchange within 48 hours of delivery."
  },
  {
    question: "Do you sell genetically modified (GMO) seeds?",
    answer:
      "No, ICM does not sell GMO seeds. We only deal in certified hybrid and open-pollinated varieties."
  },
  {
    question: "Is bulk purchasing available for farms?",
    answer:
      "Yes, we offer wholesale pricing and bulk supply for large farms and agri-retailers. Contact us for a custom quote."
  }
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-wrapper">
      <div className="faq-container">
        <h1 className="faq-title">Frequently Asked Questions</h1>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              className={`faq-item ${activeIndex === index ? "open" : ""}`}
              key={index}
              onClick={() => toggle(index)}
            >
              <div className="faq-question">
                {faq.question}
                <span className="faq-icon">{activeIndex === index ? "▲" : "▼"}</span>
              </div>
              <div className="faq-answer">
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
