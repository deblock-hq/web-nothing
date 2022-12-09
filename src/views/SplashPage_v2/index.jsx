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
        </div>
        <div>
          <Blob className="blob-2" color="#D5CAF7" />
          <Blob className="blob-1" color="#C5CAF7" />
          <Blob className="blob-3" color="#E5CAF7" />
          <Blob className="blob-4" color="#F5CAF7" />
          <Blob className="blob-5" color="#G5CAF7" />
          <Blob className="blob-6" color="#H5CAF7" />
          <Blob className="blob-7" color="#I5CAF7" />
          <Blob className="blob-8" color="#J5CAF7" />
          <Blob className="blob-9" color="#K5CAF7" />
          <Blob className="blob-10" color="#L5CAF7" />
          <Blob className="blob-11" color="#M5CAF7" />
          <Blob className="blob-12" color="#N5CAF7" />
          <Blob className="blob-13" color="#O5CAF7" />
          <Blob className="blob-14" color="#P5CAF7" />
          <Blob className="blob-15" color="#Q5CAF7" />
          <Blob className="blob-16" color="#R5CAF7" />
          <Blob className="blob-17" color="#S5CAF7" />
          <Blob className="blob-18" color="#T5CAF7" />
          <Blob className="blob-19" color="#U5CAF7" />
        </div>
      </div>
    </div>
  );
};

export default SplashPage_v2;
