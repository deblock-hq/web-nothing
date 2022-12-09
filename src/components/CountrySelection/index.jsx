import React from "react";
import { useTranslation } from "react-i18next";
import Header from "../Header";
import UkFlag from "../../assets/en-flag.svg";
import FrFlag from "../../assets/fr-flag.svg";
import Arrow from "../../assets/arrow.svg";
import Blob from "../../views/Blob";
import Trace from "../../assets/Trace.svg";
import "./index.css";
import { Link } from "react-router-dom";

const CountrySlection = () => {
  const { t } = useTranslation("translation");

  return (
    <div className="CountrySelection">
      <div className="CountrySelection-container">
        <Header />
        <span className="titles">{t("only-available-countries")}</span>
        <div className="country-container">
          <span className="choose-country">
            <span>{t("choose-your-country")}</span>
            <img src={Trace} alt="Trace" />
          </span>
          <ul>
            <Link to="/">
              <li>
                <div>
                  <img
                    className="flag"
                    src={UkFlag}
                    alt="United Kingdom flag"
                  />
                  <span>United Kingdom</span>
                </div>
                <img className="arrow" src={Arrow} alt="Arrow" />
              </li>
            </Link>
            <Link to="/fr-FR">
              <li>
                <div>
                  <img className="flag" src={FrFlag} alt="France flag" />
                  <span>France</span>
                </div>
                <img className="arrow" src={Arrow} alt="Arrow" />
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <Blob className="country-blob-left" color="#F9DFE5" />
      <Blob className="country-blob-right" color="#ECE9D3" />
    </div>
  );
};

export default CountrySlection;
