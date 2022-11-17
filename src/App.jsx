import React from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter, Navigate, Route, Routes, useParams, useNavigate } from 'react-router-dom';
import Home from './Home';

const App = () => {
  const { i18n } = useTranslation();
  let navigate = useNavigate();

  let detectedLng = i18n.language.substring(0, 2);

  if (detectedLng !== 'fr') detectedLng = 'en';

  console.log(detectedLng);

  return (
    <Routes>
      <Route path="/" element={<Navigate to={`/${detectedLng}`} />} exact />
      <Route path="/:lng" element={<Home />} />
    </Routes>
  )
}

export default App;