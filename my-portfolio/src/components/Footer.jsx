import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary text-light py-4">
      <div className="container text-center">
        {/* Navigation Links */}
        <ul className="list-unstyled d-flex flex-column flex-sm-row justify-content-center mb-2 gap-3">
          <li>
            <a href="#header" className="text-light text-decoration-none">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-light text-decoration-none">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="text-light text-decoration-none">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="text-light text-decoration-none">
              Contact
            </a>
          </li>
        </ul>

        <hr className="w-50 mx-auto my-2" />

        {/* Copyright */}
        <p className="mb-0">&copy; Varad Mule</p>
      </div>
    </footer>
  );
};

export default Footer;
