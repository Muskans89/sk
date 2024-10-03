"use client";

import { FaInstagram, FaYoutube, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8">
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Futura:wght@400;700&display=swap");

        .footer-container {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          font-family: "Futura", sans-serif;
          position: relative;
        }

        .footer-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 50px; /* Add gap between columns */
          padding: 0 40px;
        }

        .footer-column {
          flex: 1; /* Ensures equal space for each column */
          text-align: left;
        }

        .footer-link {
          color: #ffffff;
          font-size: 16px; /* Increased font size for quick links */
          margin-bottom: 10px;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-link:hover {
          color: #ff6d6d; /* Hover color */
        }

        .footer-contact {
          font-size: 18px; /* Increased font size for contact */
          margin-bottom: 5px;
        }

        .social-icons {
          display: flex;
          gap: 10px; /* Add spacing between icons */
          margin-top: 15px;
        }

        .social-icon {
          background-color: white;
          color: black;
          padding: 10px;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .social-icon:hover {
          background-color: #ff6d6d;
          color: white;
        }

        .enquire-button {
          border: 1px solid white;
          padding: 10px 20px;
          background-color: transparent;
          text-transform: uppercase;
          font-size: 16px;
          font-weight: 400;
          transition: all 0.3s ease;
          margin-top: 10px;
        }

        .enquire-button:hover {
          background-color: white;
          color: black;
        }

        .logo-text {
          font-size: 24px;
          font-weight: 700;
          line-height: 1.4;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }

        /* Style for the copyright section */
        .footer-bottom {
          margin-top: 40px;
          text-align: center;
          padding: 10px 0;
        }

        @media (min-width: 1024px) {
          .footer-row {
            flex-direction: row;
            justify-content: space-between;
          }

          .footer-column {
            align-items: flex-start;
          }

          .footer-container {
            padding-left: 40px;
            padding-right: 40px;
          }
        }

        @media (max-width: 768px) {
          .footer-row {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .footer-column {
            margin-bottom: 20px;
            text-align: center;
          }

          .social-icons {
            justify-content: center;
          }
        }
      `}</style>

      <div className="footer-container">
        <div className="footer-row">
          {/* Left Section: Logo/Branding Text */}
          <div className="footer-column">
            <div className="logo-text">
              SUMIT KHETAN <br /> ENTERTAINMENT & CO
            </div>
            <div className="social-icons">
              <a
                href="https://www.instagram.com/sumitkhetanent/"
                target="_blank"
                className="social-icon"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/sumit-khetan-a7949810b/"
                target="_blank"
                className="social-icon"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.youtube.com/channel/UCC4d4JBwuMnhO1x17NelxHA"
                target="_blank"
                className="social-icon"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.facebook.com/sumitkhetanentertainment"
                target="_blank"
                className="social-icon"
              >
                <FaFacebook />
              </a>
            </div>
          </div>

          {/* Middle Section: Contact Information */}
          <div className="footer-column text-center">
            <h3 className="text-lg font-bold">Get in Touch</h3>
            <p className="text-lg footer-contact">info@sumitkhetan.com</p>
            <p className="footer-contact md-2">+91-9833951779</p>
           
          </div>

          {/* Right Section: Quick Links */}
          <div className="footer-column text-right">
            <h3 className="text-2xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about-us" className="footer-link">
                  About Us
                </a>
              </li>
              <li>
                <a href="/Awards" className="footer-link">
                  Awards
                </a>
              </li>
              <li>
                <a href="/Events" className="footer-link">
                  Events
                </a>
              </li>
              <li>
                <a href="/contact-us" className="footer-link">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
      </div>
    </footer>
  );
};

export default Footer;
