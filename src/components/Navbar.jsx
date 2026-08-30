import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Navbar.css';

export default function Navbar() {
  const { lang, toggleLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        


        

        <div className="logo">
          <a href="/">
            <img src="/yadove.png" alt="Yadove Agency Logo" className="logo-image" />
          </a>
          {/* <span className="logo-text">Yadove Agency</span> */}
        </div>





        {/* Desktop Links */}
        <ul className="nav-links">
          <li><a href="#home">{t.home}</a></li>
          <li><a href="#services">{t.services}</a></li>
          <li><a href="#booking">{t.bookNow}</a></li>
          <li><a href="#b2b">B2B</a></li>
        </ul>

        {/* Language + Call button */}
        <div className="nav-actions">
          <button className="lang-btn" onClick={toggleLanguage}>
            {lang === 'ar' ? 'EN' : 'عربي'}
          </button>
          <a href="tel:+966500000000" className="call-btn">
            <Phone size={18} />
            <span>{t.call}</span>
          </a>
        </div>

        {/* Hamburger (mobile) */}
        <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu - slides from the RIGHT (80% width) */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#home" onClick={() => setIsOpen(false)}>{t.home}</a></li>
          <li><a href="#services" onClick={() => setIsOpen(false)}>{t.services}</a></li>
          <li><a href="#booking" onClick={() => setIsOpen(false)}>{t.bookNow}</a></li>
          <li><a href="#b2b" onClick={() => setIsOpen(false)}>B2B</a></li>
        </ul>
        <button className="lang-btn mobile" onClick={toggleLanguage}>
          {lang === 'ar' ? 'English' : 'العربية'}
        </button>
      </div>

      {/* Dark overlay when menu is open */}
      {isOpen && <div className="overlay" onClick={() => setIsOpen(false)}></div>}
    </nav>
  );
}