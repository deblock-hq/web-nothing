import React from "react";
import Logo from "../../assets/deflogo.svg";
import Splash from "../../assets/Vector.svg";
import Arrow from "../../assets/arrow-right-circle.svg";
import Cross from "../../assets/cross.svg";

import "./index.css";
import Blob from "../Blob";

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
            <img src={Cross} atl="Cross" />
          </div>
          <div className="capsules capsule-top">
            <h2>{h2}</h2>
            <img src={Cross} atl="Cross" />
          </div>
          <div className="capsules capsule-right">
            <span>{span}</span>
            <img src={Arrow} atl="Arrow right" />
          </div>
          <Blob className="blob-left" color="#E6E1EA" />
          <Blob className="blob-top" color="#F9D4BF" />
          <Blob className="blob-right" color="#F4E9D2" />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default SplashPage_v2;
