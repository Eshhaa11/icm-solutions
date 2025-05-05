import React, { useState } from "react";
import "../styles/ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("Form submitted:", formData);
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p className="intro">
        Have questions or need more information? Reach out to us, and we’ll be
        happy to assist you.
      </p>

      <div className="contact-info">
        <div className="contact-details">
          <h3>Our Office</h3>
          <p>
            📍 <strong>ICM Solutions Ltd.</strong>
            <br />
            Milimani Apartment G4, Lena Moi Road, Nakuru, Kenya
          </p>
          <p>
            📞 <strong>Phone:</strong> +254 95216873
            <br />
            📧 <strong>Email:</strong> info@icm.co.ke
          </p>
        </div>

        <div className="contact-map">
          <h3>Our Location</h3>
          <div className="map-container">
            {/* Google Maps Embed */}
            <iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d63836.213972305195!2d36.06715320161695!3d-0.30070029502120527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s%3A%20Milimani%20Apartment%20G4%2C%20Lena%20Moi%20Road%2C%20Nakuru%2C%20Kenya!5e0!3m2!1sen!2ske!4v1746469934476!5m2!1sen!2ske
"
              width="600"
              height="450"
              style={{ border: 0 }} 
              allowFullScreen
              loading="lazy"
              className="map-iframe"
            />
          </div>
        </div>
      </div>


      <form onSubmit={handleSubmit} className="contact-form">
        <h3>Send Us a Message</h3>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Your message"
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
