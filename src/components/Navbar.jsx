// src/components/Navbar.jsx
import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Navbar.css';

export default function Navbar() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <div className="logo">
          <a href="/">
            <img src="/yadove.png" alt="Yadove Agency Logo" className="logo-image" />
          </a>
        </div>

        {/* Desktop Links */}
        <ul className="nav-links">
          <li><a href="#home">{t.home}</a></li>
          <li><a href="#services">{t.services}</a></li>
          <li><a href="#booking">{t.bookNow}</a></li>
          <li><a href="#b2b">B2B</a></li>
        </ul>

        {/* Call button */}
        <div className="nav-actions">
          <a href="tel:+966534851367" className="call-btn">
            <Phone size={18} />
            <span>{t.call}</span>
          </a>
        </div>

        {/* Hamburger (Mobile trigger only) */}
        <button className="hamburger" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <button className="mobile-close-btn" onClick={() => setIsOpen(false)} aria-label="Close Menu">
          <X size={24} />
        </button>

        <ul>
          <li><a href="#home" onClick={() => setIsOpen(false)}>{t.home}</a></li>
          <li><a href="#services" onClick={() => setIsOpen(false)}>{t.services}</a></li>
          <li><a href="#booking" onClick={() => setIsOpen(false)}>{t.bookNow}</a></li>
          <li><a href="#b2b" onClick={() => setIsOpen(false)}>B2B</a></li>
        </ul>

        <div className="mobile-actions">
          <a href="tel:+966534851367" className="call-btn mobile" onClick={() => setIsOpen(false)}>
            <Phone size={18} />
            <span>{t.call}</span>
          </a>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && <div className="overlay" onClick={() => setIsOpen(false)}></div>}
    </nav>
  );
}