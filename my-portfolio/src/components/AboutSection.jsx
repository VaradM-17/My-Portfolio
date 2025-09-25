import React from "react";
import aboutImage from "../assets/images/about.png";
import ViewMyWorkButton from "./ViewMyWorkButton";

const AboutSection = () => {
  return (
    <div className="bg-dark text-light py-5" id="about">
      <div className="container my-5 py-5">
        <div className="row flex-column-reverse flex-md-row align-items-center">
          <div className="col-md-6 mt-5 mt-md-0 d-flex justify-content-center">
            <img
              className="img-fluid w-75"
              src={aboutImage}
              alt="about img"
            />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center align-items-md-start text-center text-md-start">
            <h2 className="mb-4 h2-font">About Me</h2>
            <p>
              I’m <strong>Varad Mule</strong>, a Java Backend Developer with 
              hands-on experience in building scalable applications using 
              <strong> Spring Boot, Hibernate, MySQL, and REST APIs</strong>.
            </p>
            <p>
              I have practical exposure to <strong>Spring Security & JWT</strong> 
              for authentication and authorization, along with frontend integration 
              using <strong>React, Bootstrap, HTML, CSS, and JavaScript</strong>.
            </p>
            <p>
              I have completed <strong>Full Stack Development Training</strong> at 
              The Kiran Academy and gained industry experience as a 
              <strong> Java Developer Intern</strong> at MRND Pvt. Ltd.
            </p>
            <p>
              Passionate about problem-solving and continuous learning, my goal is 
              to build efficient, secure, and user-friendly software solutions.
            </p>
            <ViewMyWorkButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
