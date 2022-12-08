import React from "react";
import Logo from "../../assets/deflogo.svg";
import Splash from "../../assets/Vector.svg";
import Arrow from "../../assets/arrow-right-circle.svg";
import Cross from "../../assets/cross.svg";
import BlobRight from "../../assets/blob1.svg";

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
      </div>
      {/* <div>
        <svg
          id="visual"
          viewBox="0 0 900 600"
          width="900"
          height="600"
          version="1.1"
        >
          <path fill="#F59300">
            <animate
              attributeName="d"
              dur="30000ms"
              repeatCount="indefinite"
              values="
              M117.2 -204.2C141.5 -189.1 143.5 -136.5 170.2 -96.3C197 -56 248.5 -28 245.9 -1.5C243.3 25 186.6 50 158.9 88.5C131.1 127.1 132.3 179.2 110.7 211.8C89 244.5 44.5 257.7 -1.5 260.3C-47.5 262.9 -95 254.9 -123.7 226.3C-152.4 197.7 -162.4 148.6 -165.8 107.5C-169.2 66.3 -166.1 33.2 -176.2 -5.8C-186.3 -44.8 -209.6 -89.7 -198 -116.5C-186.3 -143.4 -139.7 -152.2 -100.8 -159C-62 -165.7 -31 -170.4 7.7 -183.8C46.5 -197.2 93 -219.4 117.2 -204.2;
                    M107 -196.3C128.6 -172.8 129.3 -123.9 143.3 -87C157.3 -50 184.6 -25 203.7 11C222.7 47 233.5 94 219.5 131C205.5 167.9 166.7 194.8 126 221.3C85.3 247.8 42.7 273.9 -3.2 279.4C-49 284.9 -98 269.7 -125.7 235.7C-153.4 201.7 -159.9 148.9 -163.2 106.4C-166.5 64 -166.8 32 -164.4 1.3C-162.1 -29.3 -157.3 -58.7 -151.2 -96.3C-145.1 -134 -137.8 -180 -112.4 -201.4C-87 -222.7 -43.5 -219.3 -0.4 -218.6C42.7 -217.9 85.3 -219.8 107 -196.3;
                    M117.2 -204.2C141.5 -189.1 143.5 -136.5 170.2 -96.3C197 -56 248.5 -28 245.9 -1.5C243.3 25 186.6 50 158.9 88.5C131.1 127.1 132.3 179.2 110.7 211.8C89 244.5 44.5 257.7 -1.5 260.3C-47.5 262.9 -95 254.9 -123.7 226.3C-152.4 197.7 -162.4 148.6 -165.8 107.5C-169.2 66.3 -166.1 33.2 -176.2 -5.8C-186.3 -44.8 -209.6 -89.7 -198 -116.5C-186.3 -143.4 -139.7 -152.2 -100.8 -159C-62 -165.7 -31 -170.4 7.7 -183.8C46.5 -197.2 93 -219.4 117.2 -204.2"
            ></animate>
          </path>
        </svg>
      </div> */}
    </div>
  );
};

export default SplashPage_v2;
