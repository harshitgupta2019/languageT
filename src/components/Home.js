import React from 'react';
import { useTranslation } from 'react-i18next';
import './Home.css'; // Import your CSS file

function Home() {
  const { t } = useTranslation();

  return (
    <div className="home-container">
      <h1 className="home-title">{t('home')}</h1>
      <p className="home-welcome">{t('welcome')}</p>
    </div>
  );
}

export default Home;
