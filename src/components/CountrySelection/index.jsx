import React from "react";
import { useTranslation } from "react-i18next";
import Header from "../Header";
import EuropeCountries from "./europeCountries.json";
import "./index.css";

const CountrySlection = () => {
  const { t } = useTranslation("translation");

  return (
    <div className="CountrySelection">
      <div className="CountrySelection-container">
        <Header />
        <span className="titles">{t("choose-your-country")}</span>
        <div className="country-container">
          <span className="continent">{t("europe")}</span>
          <ul>
            {EuropeCountries.map((country, i) => (
              <li key={i}>
                <span className="flag" />
                {country.country}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CountrySlection;
