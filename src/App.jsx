import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LandingPageFr from "./components/fr/LandingPage/index";
import LandingPageEn from "./components/en/LandingPage/index";
import CountrySelection from "./components/CountrySelection";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPageEn />} exact />
      <Route path="/:lng-FR" element={<LandingPageFr />} caseSensitive />
      <Route
        path="/choose-your-country"
        element={<CountrySelection />}
        caseSensitive
      />
      <Route path="/en-GB" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
