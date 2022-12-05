import React from "react";
import Logo from "../../assets/logo.svg";

import "./index.css";

const SplashPage_v1 = ({title}) => {
  return (
    <div className="App">
      <h1 style={{ fontSize: "40px" }}>{title}</h1>
      <div className="container">
        <div className="images-container">
          <img className="logo" src={Logo} atl="Logo Deblock" />
        </div>
      </div>
    </div>
  );
};

export default SplashPage_v1;
