// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useLanguage } from './LanguageContext'; // Import useLanguage from LanguageContext
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';

function App() {
  const { changeLanguage } = useLanguage(); // Get the changeLanguage function

  // Use useEffect to set the initial language from local storage
  useEffect(() => {
    const storedLanguage = localStorage.getItem('selectedLanguage');
    if (storedLanguage) {
      console.log('Found stored language:', storedLanguage);
      changeLanguage(storedLanguage);
    } else {
      console.log('No stored language preference found.');
    }
  }, [changeLanguage]);

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
