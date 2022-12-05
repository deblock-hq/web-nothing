import React from "react";
import { useTranslation } from "react-i18next";
import { Route, Routes, useParams } from "react-router-dom";
import LandingPageFr from "./components/fr/LandingPage/index";
import LandingPageEn from "./components/en/LandingPage/index";
import CountrySelection from "./components/CountrySelection";

const App = () => {
  const { i18n } = useTranslation();
  const { lng } = useParams();

  // let detectedLng = i18n.language.substring(0, 2);

  // if (detectedLng !== "fr") detectedLng = "en";

  // console.log("i18n", i18n);

  return (
    <Routes>
      {/* {test()} */}
      {/* <Route path="/" element={<Navigate to={`/${detectedLng}`} />} exact /> */}
      <Route path="/" element={<LandingPageEn />} exact />
      <Route path="/FR-:lng" element={<LandingPageFr />} caseSensitive />
      <Route path="/choose-your-country" element={<CountrySelection />} exact />
    </Routes>
  );
};

export default App;
