import React from "react";
import { useTranslation } from "react-i18next";
import { Route, Routes, useParams } from "react-router-dom";
import LandingPageFr from "./components/fr/LandingPage/index";
import LandingPageEn from "./components/en/LandingPage/index";
import CountrySelection from "./components/CountrySelection";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPageEn />} exact />
      <Route path="/FR-:lng" element={<LandingPageFr />} caseSensitive />
      <Route path="/choose-your-country" element={<CountrySelection />} exact />
    </Routes>
  );
};

export default App;
