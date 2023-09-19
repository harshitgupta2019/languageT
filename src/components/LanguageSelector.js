// src/components/LanguageSelector.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import i18next from "i18next"

function LanguageSelector() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    // i18n.changeLanguage(language);
    i18next.changeLanguage(language);
    localStorage.setItem('selectedLanguage', language);
  };

  return (
    <div className="language-selector">
      <select onChange={(e) => changeLanguage(e.target.value)} value={i18n.language}>
        <option value="en">English</option>
        <option value="hi">Hindi</option>
        <option value="zh">Chinese</option>
      </select>
    </div>
  );
}

export default LanguageSelector;
