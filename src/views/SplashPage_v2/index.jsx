import React from "react";
import Logo from "../../assets/logo.svg";
import Splash from "../../assets/Vector.svg";
import Arrow from  "../../assets/arrow-right-circle.svg";

import "./index.css";

const SplashPage_v2 = ({ h1, h2, span }) => {
  return (
    <div className="SplashPage">
      <div className="container">
        <div className="images-container">
          <img className="splash" src={Splash} atl="Background splash" />
          <img className="logo" src={Logo} atl="Logo Deblock" />
          <span className="probably-nothing">probably nothing</span>
          <div className="capsules capsule-left">
            <h1>{h1}</h1>
            <span className="cross-icon">+</span>
          </div>
          <div className="capsules capsule-top">
            <h2>{h2}</h2>
            <span className="cross-icon">+</span>
          </div>
          <div className="capsules capsule-right">
            <span>{span}</span>
            <img src={Arrow} atl="Arrow right" />
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default SplashPage_v2;
