import { Suspense } from 'react';
import Logo from './assets/logo.svg';
import { useTranslation, Trans } from "react-i18next";
import './App.css';

const App = () => {
  const { t, i18n } = useTranslation('translation');

  return (
    <Suspense fallback="loading">
      <div className='App'>
        <h1>{t('title')}</h1>
        <h1>
          <Trans i18nKey='title'>
            Probably nothing
          </Trans>
        </h1>
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

export default App;
