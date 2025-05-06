import React from "react";
import "../styles/AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-page">
      <h1>About ICM Solutions Ltd</h1>
      <p>
        ICM Solutions Ltd is a dynamic agribusiness dedicated to advancing sustainable,
        science-driven agriculture. Since our inception, we have empowered stakeholders
        across Kenya and beyond through premium seed distribution, rigorous pesticide
        efficacy trials, professional agricultural training, and laboratory diagnostics.
        Our foundation is built on innovation, scientific integrity, and a commitment
        to environmental sustainability.
      </p>

      <div className="about-sections">
        <div>
          <h2>Our Mission</h2>
          <p>
            Empower agriculture through innovation, validated science, and quality service
            delivery to promote productivity and sustainability.
          </p>
        </div>

        <div>
          <h2>Why Choose Us?</h2>
          <ul>
            <li>✅ High-performance vegetable seeds</li>
            <li>🧪 Accredited pesticide efficacy trials</li>
            <li>🎓 NITA-certified professional training</li>
            <li>🔬 Laboratory diagnostics and plant health services</li>
            <li>🌍 Serving clients across Kenya and East Africa</li>
          </ul>
        </div>

        <div>
          <h2>Our Core Services</h2>
          <ul>
            <li>🌱 Vegetable seed merchandising with expert guidance</li>
            <li>🧫 Pesticide efficacy trials across agro-ecological zones</li>
            <li>🔍 Seed testing and plant pathology diagnostics</li>
            <li>📚 On-farm and centralized agricultural training</li>
          </ul>
        </div>

        <div>
          <h2>Our Expertise</h2>
          <p>
            Our team comprises agronomists, trial specialists, lab technicians,
            training facilitators, and data analysts, all united by a shared
            commitment to agricultural excellence and client satisfaction.
          </p>
        </div>

        <div>
          <h2>Facilities & Reach</h2>
          <p>
            From our head office in Nakuru to trial stations and laboratories in key
            zones, we offer reliable, data-driven agricultural solutions backed by
            robust infrastructure and regional field experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
