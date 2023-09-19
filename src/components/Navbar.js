import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import LanguageSelector from './LanguageSelector';
import { useTranslation } from 'react-i18next'; // Import useTranslation

const Navbar = () => {
  const { t } = useTranslation(); // Initialize useTranslation

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">{t('appTitle')}</Link> {/* Use t('appTitle') for Meeting App */}
      </div>
      <div className="navbar-container">
        <input type='checkbox' className="toggle-menu" />
        <div className="hamburger"></div>
        <ul className="navbar-links">
          <li>
            <Link to="/">{t('Home')}</Link> {/* Use t('home') for Home */}
          </li>
          <li>
            <Link to="/about">{t('About')}</Link> {/* Use t('about') for About */}
          </li>
        </ul>
      </div>
      <LanguageSelector />
    </nav>
  );
};

export default Navbar;
