import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LandingPageFr from "./components/fr/LandingPage/index";
import LandingPageEn from "./components/en/LandingPage/index";
import CountrySelection from "./components/CountrySelection";
import Blob from "./views/Blob";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPageEn />} exact />
      <Route path="/blob" element={<Blob />}  />
      <Route path="/:lng-FR" element={<LandingPageFr />} />
      <Route path="/choose-your-country" element={<CountrySelection />} />
      <Route path="/en-GB" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
