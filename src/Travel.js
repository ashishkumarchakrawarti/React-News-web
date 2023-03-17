import React from "react";
import video from "./pez.mp4";
import logo1 from "./logo1.png";
import './App1.css'

const FlipCard = () => {
  return (
    <div className="container-fluid">
<div className="row">

      <div className="hero col-md-6 mb-3">
        <video loop autoPlay muted plays-inline className="back-video">
          <source src={video} type="video/mp4" />
        </video>
        {/* <nav>
          <img src={logo1} alt="logo1" className="logo" />
          <ul>y
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="/">BEACHES</a>
            </li>
            <li>
              <a href="/">POPULAR AERA</a>
            </li>
            <li>
              <a href="/">CONTACT US</a>
            </li>
          </ul>
        </nav> */}
        <div className="content">
          <h1>Indonesia</h1>
          <a href="/">Explore</a>
        </div>
      </div>
      



      </div>
    </div>
  );
};

export default FlipCard;
