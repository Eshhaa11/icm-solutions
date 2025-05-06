import React from "react";
import "../styles/ContactUs.css";


const ContactUs = () => {
  return (
    <div className="container">
     
  
      <div className="form">
        <div className="contact-info">
          <h3 className="title">Let's get in touch</h3>
          <p className="text">
            Reach out to us for any inquiries, feedback, or support. We are here to help you!
          </p>

          <div className="info">
            <div className="information">
              <p><strong>Address:</strong> Milimani Apartment G4, Lena Moi Road, Nakuru, Kenya</p>
            </div>
            <div className="information">
              <p><strong>Email:</strong> info@icm.co.ke</p>
            </div>
            <div className="information">
              <p><strong>Phone:</strong> +254 95216873</p>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form autoComplete="off">
            <h3 className="title">Contact us</h3>
            <div className="input-container">
              <input type="text" name="name" className="input" 
              placeholder="Name" required />
              
            
            </div>
            <div className="input-container">
              <input type="email" name="email" className="input"
              placeholder="Email" required />
              
            </div>
            <div className="input-container">
              <input type="tel" name="phone" className="input"
              placeholder="Phone Number" required />
              
            </div>
            <div className="input-container textarea">
              <textarea name="message" className="input"
              placeholder="Message" required></textarea>
              
            </div>
            <input type="submit" value="Send" className="btn" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
