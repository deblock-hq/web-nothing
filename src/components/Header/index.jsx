import React from "react";
import LogoHeader from "../../assets/logo-header.svg";
import "./index.css";

const Header = () => {
  return (
    <header>
      <img src={LogoHeader} alt="Logo deblock" />
    </header>
  );
};

export default Header;
