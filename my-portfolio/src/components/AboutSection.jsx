import React from "react";
import aboutImage from "../assets/images/about.png";
import ViewMyWorkButton from "./ViewMyWorkButton";

const AboutSection = () => {
  return (
    <div className="bg-dark text-light py-5" id="about">
      <div className="container my-5 py-5">
        <div className="row flex-column-reverse flex-md-row align-items-center">
          <div className="col-md-6 mt-5 mt-md-0 d-flex justify-content-center justify-content-md-center">
            <img
              className="img-fluid w-75 "
              src={aboutImage}
              alt="about img"
            />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center align-items-md-start text-center text-md-start">
            <h2 className="mb-4 h2-font">About Me</h2>
            <p>
              I am a dedicated Java developer with hands-on experience in
              building backend and full-stack web applications using Spring Boot
              and modern technologies. I enjoy solving complex problems and
              continuously improving my skills.
            </p>
            <p>
              In addition to coding, I am passionate about learning new
              frameworks, contributing to projects, and staying updated with
              industry trends. My goal is to create efficient, maintainable, and
              user-friendly software solutions.
            </p>
            <ViewMyWorkButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
