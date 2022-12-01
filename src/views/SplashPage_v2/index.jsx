import React from "react";
import Logo from "../../assets/logo.svg";

import "./index.css";

const SplashPage_v2 = ({ h1, h2, span }) => {
  return (
    <div className="SplashPage">
      <div className="container">
        <div className="images-container">
          <img className="logo" src={Logo} atl="Logo Deblock" />
          <span className="probably-nothing">probably nothing</span>
          {/* <div className="capsule-left">
            <h1>{h1}</h1>
            <span>x</span>
          </div>
          <div className="capsule-top">
            <h2>{h2}</h2>
            <span>x</span>
          </div>
          <div className="capsule-right">
            <span>{span}</span>
            <span>x</span>
          </div> */}
          <div className="Grid">
            <div className="capsule-left">
              <h1>{h1}</h1>
              <span>x</span>
            </div>
            <div className="capsule-top">
              <h2>{h2}</h2>
              <span>x</span>
            </div>
            <div className="capsule-right">
              <span>{span}</span>
              <span>x</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashPage_v2;
