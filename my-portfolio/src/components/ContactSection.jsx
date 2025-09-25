import React from "react";
import ContactForm from "./ContactForm";
import { FaLinkedin, FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";

const ContactSection = () => {
  return (
    <div className="bg-dark text-light py-5" id="contact">
      <div className="container my-5 py-5">
        <div className="row">
          {/* Contact Info */}
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center text-center">
            <h2 className="mb-4 h2-font">Contact Me</h2>
            <p className="mb-1">varadmule17@gmail.com</p>
            <p className="mb-1">+91 9922055257</p>
            <p className="mb-3">Pune, Maharashtra</p>
            <hr className="w-50 mb-4" />

            {/* Social Links */}
            <ul className="list-unstyled d-flex justify-content-center gap-4 mb-0 fs-3">
              <li>
                <a
                  href="https://www.linkedin.com/in/varadmule17"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/VaradM-17"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary"
                >
                  <FaGithub />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary"
                >
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary"
                >
                  <FaYoutube />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="col-md-6 mt-5 mt-md-0">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
