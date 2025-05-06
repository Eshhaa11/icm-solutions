import React from "react";
import "../styles/ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>We'd love to hear from you!</p>

      <div className="contact-wrapper">
        <div className="contact-details">
          <h2>Our Office</h2>
          <p><strong>Address:</strong> Milimani Apartment G4, Lena Moi Road, Nakuru, Kenya</p>
          <p><strong>Email:</strong> info@icm.co.ke</p>
          <p><strong>Phone:</strong> +254 95216873</p>
        </div>

        <div className="contact-form">
          <h2>Send a Message</h2>
          <form>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
