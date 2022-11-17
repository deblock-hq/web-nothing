import { Suspense } from 'react';
import Logo from './assets/logo.svg';
import { useTranslation } from "react-i18next";
import './Home.css';
import i18next from 'i18next';
import { useParams, redirect, useNavigate } from 'react-router-dom';
import { languagesAvailable } from './i18n';
import { useEffect } from 'react';

const Home = () => {
  const { t, i18n } = useTranslation('translation');
  const { lng } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    if (!languagesAvailable.includes(lng)) {
      navigate("/en");
    }
  }, [])

  return (
    <Suspense fallback="loading">
      <div className='App'>
        <h1>{t('title')}</h1>
        <button type='button' onClick={() => i18n.changeLanguage('en')}>EN</button>
        <button type='button' onClick={() => i18n.changeLanguage('fr')}>FR</button>
        <div className='container'>
          <div className='images-container'>
            <img className='logo' src={Logo} atl='Logo Deblock' />
          </div>
        </div>
      </div>
    </Suspense>
  )
};

export default Home;
