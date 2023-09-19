import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import './About.css'; // Import your CSS file

function About() {
  const { t } = useTranslation();

  return (
    <div className="about-container">
      <h1 className="about-title">{t('about')}</h1>
      <p className="about-description">{t('description')}</p>
    </div>
  );
}

export default About;
