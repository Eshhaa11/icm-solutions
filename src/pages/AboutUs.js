import React from "react";
import "../styles/AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-page">
      <h1>ICM Solutions Ltd.</h1>
      <h2>Empowering Agriculture Through Innovation and Scientific Excellence</h2>
      <p className="intro">
        ICM Solutions Ltd. is a dynamic agribusiness company dedicated to advancing sustainable, science-driven agriculture.
        Our work spans seed distribution, pesticide efficacy trials, diagnostics, and professional training — all rooted in
        scientific integrity and environmental responsibility.
      </p>

      <section className="section">
        <h3>🌍 Company Overview</h3>
        <p>
          We serve a diverse client base — farmers, exporters, agrochemical developers, and government agencies — with
          high-performance products and validated data. By partnering with world-class seed breeders, research institutions,
          and regulatory bodies, we bridge the gap between science and field application.
        </p>
      </section>

      <section className="section">
        <h3>🚜 Core Services</h3>

        <div className="service-block">
          <h4>1. Vegetable Seed Merchandising</h4>
          <p>
            We offer a robust catalog of hybrid and open-pollinated vegetable seeds, chosen for high germination, disease resistance,
            and adaptability. Our agronomy team works directly with farmers to optimize crop performance.
          </p>
          <ul>
            <li>Tomato </li>
            <li>Cabbage </li>
            <li>Onion </li>
            <li>Carrot </li>
            <li>Spinach </li>
            <li>Pepper (Capsicum)</li>
            <li>Leafy greens & root crops</li>
          </ul>
        </div>

        <div className="service-block">
          <h4>2. Pesticide Efficacy Trials</h4>
          <p>
            Accredited by the Pest Control Products Board (PCPB), we conduct pesticide efficacy trials across a range of crops and
            agro-ecological zones, helping manufacturers validate performance.
          </p>
          <ul>
            <li>Insecticides, Fungicides, Herbicides</li>
            <li>Biopesticides, Nematicides, Growth Regulators</li>
            <li>Field & Greenhouse Trials</li>
          </ul>
        </div>

        <div className="service-block">
          <h4>3. Laboratory Services</h4>
          <p>
            Our lab supports crop health and seed quality assurance through advanced diagnostics and timely testing.
          </p>
          <ul>
            <li>Seed germination and purity testing</li>
            <li>Plant pathology (disease and pest diagnostics)</li>
            <li>Research support and compliance testing</li>
          </ul>
        </div>

        <div className="service-block">
          <h4>4. Professional Training & Capacity Building</h4>
          <p>
            As a registered training provider with NITA (TRN/2044), we empower horticultural professionals with practical,
            science-based knowledge across East Africa. Our hands-on training emphasizes operational independence and smart
            farm management.
          </p>
          <ul>
            <li>Crop production and protection (IPM)</li>
            <li>Safe pesticide handling & application</li>
            <li>Irrigation, fertigation & greenhouse management</li>
            <li>Post-harvest handling & plant tissue culture</li>
            <li>Lab methods & research methodologies</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h3>🎯 Target Clients</h3>
        <p>
          We support a broad spectrum of clients across the value chain:
        </p>
        <ul>
          <li>Commercial farmers and cooperatives</li>
          <li>Horticultural export firms</li>
          <li>Agrochemical companies</li>
          <li>Academic and research institutions</li>
          <li>Government and regulatory bodies</li>
        </ul>
      </section>

      <section className="section">
        <h3>👨‍🔬 Team & Expertise</h3>
        <p>
          Our multidisciplinary team includes:
        </p>
        <ul>
          <li>Agronomists with local and regional expertise</li>
          <li>Trial specialists trained in field methodology</li>
          <li>Data analysts skilled in statistics & design</li>
          <li>Lab technicians certified in diagnostics</li>
          <li>NITA-accredited trainers and facilitators</li>
        </ul>
        <p>
          We pride ourselves on delivering expert-backed, client-focused solutions.
        </p>
      </section>

      <section className="section">
        <h3>🏢 Facilities & Locations</h3>
        <ul>
          <li><strong>Head Office:</strong> Administration, seed storage & processing</li>
          <li><strong>Trial Stations:</strong> Distributed across agro-ecological zones</li>
          <li><strong>Greenhouses:</strong> Controlled environments for sensitive trials</li>
          <li><strong>Diagnostics Lab:</strong> For seed testing and plant pathology</li>
        </ul>
      </section>

      <section className="section">
        <h3>📈 Commitment to Quality</h3>
        <p>
          Quality is at the core of our services:
        </p>
        <ul>
          <li>Compliance with global and national regulations</li>
          <li>Traceability in seed handling and distribution</li>
          <li>Transparent trial data and result validation</li>
          <li>Continuous improvement through training and feedback</li>
        </ul>
        <p>
          We believe in building trust through transparency, integrity, and service excellence.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
