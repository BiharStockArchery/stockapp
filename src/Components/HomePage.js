import React from 'react';
import '../Styles/HomePage.css'; // Import the CSS file

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Section 1 */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Our Website</h1>
          <p>Your one-stop solution for all your needs.</p>
        </div>
      </section>

      {/* Section 2 (Text and Image Side by Side) */}
      <section className="info-section">
        <div className="info-container">
          <div className="info-text">
            <h2>About Our Services</h2>
            <p>
              We provide a wide range of services that help businesses grow and
              succeed. Whether you're looking for marketing solutions, web
              development, or business consultations, we have it all.
            </p>
          </div>
          <div className="info-image">
            <img src="https://via.placeholder.com/300" alt="Services" />
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="contact-section">
        <h2>Get in Touch</h2>
        <p>
          We’d love to hear from you! Feel free to reach out to us for any
          inquiries or questions.
        </p>
      </section>
    </div>
  );
};

export default HomePage;
