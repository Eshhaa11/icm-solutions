import React, { useState } from "react";
import "../styles/Terms.css";

const Terms = ({ onAccept, onDecline }) => {
  const [accepted, setAccepted] = useState(false);

  const handleAccept = () => {
    setAccepted(true);
    onAccept && onAccept(); // callback to parent
  };

  const handleDecline = () => {
    setAccepted(false);
    onDecline && onDecline(); // callback to parent
  };

  return (
    <div className="terms-container">
      <h1>Terms and Conditions</h1>

      <div className="terms-content">
        <h2>1. Introduction</h2>
        <p>
          Welcome to ICM Seeds. By accessing our website or purchasing our
          products, you agree to comply with and be bound by these Terms and
          Conditions.
        </p>

        <h2>2. Product Information</h2>
        <p>
          All seed descriptions, characteristics, and performance data provided
          on our site are based on controlled trials. Actual performance may
          vary based on climate, soil, cultivation methods, and other
          environmental factors.
        </p>

        <h2>3. No Guarantee of Yield</h2>
        <p>
          While we ensure the quality and viability of our seeds at the time of
          packing, we do not guarantee crop results or yields. The buyer assumes
          full responsibility for the suitability of the seeds to local
          conditions.
        </p>

        <h2>4. Intellectual Property</h2>
        <p>
          All content, branding, and trademarks on this site belong to ICM
          Seeds. You may not copy, modify, or distribute any material without
          written consent.
        </p>

        <h2>5. Restrictions on Use</h2>
        <p>
          Seeds sold by ICM are for agricultural use only and are not to be used
          for breeding, propagation, or resale unless explicitly licensed for
          such purposes.
        </p>

        <h2>6. Shipping and Returns</h2>
        <p>
          We strive to ship orders within 3-5 business days. Due to the
          perishable and sensitive nature of seeds, returns are only accepted
          for incorrect or damaged items reported within 48 hours of delivery.
        </p>

        <h2>7. Limitation of Liability</h2>
        <p>
          ICM Seeds is not liable for any direct or indirect loss arising from
          the use of our products, including but not limited to loss of crops or
          income.
        </p>

        <h2>8. Changes to Terms</h2>
        <p>
          We reserve the right to update these terms at any time. Please review
          this page regularly to stay informed of any changes.
        </p>

        <h2>9. Governing Law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the
          laws of India. Any disputes will be subject to the jurisdiction of
          courts in [your city/state].
        </p>
      </div>

      <div className="terms-buttons">
        <button onClick={handleAccept} className="accept-btn">
          Accept
        </button>
        <button onClick={handleDecline} className="decline-btn">
          Decline
        </button>
      </div>

      {accepted && (
        <p className="confirmation-msg">Thank you for accepting the terms.</p>
      )}
    </div>
  );
};

export default Terms;
