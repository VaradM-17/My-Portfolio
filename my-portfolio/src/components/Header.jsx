import React from "react";
import ViewMyWorkButton from "./ViewMyWorkButton";
import profileImg from "../assets/images/header-image1.jpg";

const Header = () => {
  return (
    <div className="pt-5" id="header">
      <div className="container py-md-5">
        <div className="row p-5 align-items-center">
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-start mt-5 mt-md-0">
            <h3 className="text-secondary fw-bold lh-1 h3-font">Varad Mule</h3>

            <h1 className="text-capitalize text-start text-primary lh-1 mb-4 h1-font">
              Java Developer <br />
              Backend Developer
            </h1>

            <ViewMyWorkButton />
          </div>

          <div className="col-md-6 d-flex justify-content-center justify-content-md-end">
            <img
              src={profileImg}
              alt="Header Img"
              className="img-fluid header-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
