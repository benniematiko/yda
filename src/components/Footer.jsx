// src/components/Footer.jsx
import { useLanguage } from '../context/LanguageContext';
import { Phone, MapPin, Mail } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const { lang } = useLanguage();

  return (
    <footer className="footer">
      <div className="container footer-content">
        {/* Brand */}
        <div className="footer-brand">
          <a href="/">
            <img 
              src="/yadove__white.png" 
              alt="Yadove Agency Logo" 
              className="footer-logo" 
            />
          </a>
          <p>
            {lang === 'ar'
              ? 'نظافة فاخرة… ثقة سعودية'
              : 'Premium Cleaning. Saudi Trust.'}
          </p>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h4>{lang === 'ar' ? 'تواصل معنا' : 'Contact Us'}</h4>
          <ul>
            <li>
              <Phone size={16} />
              <a href="tel:+966534851367">+966 53 4851 367</a>
            </li>
            <li>
              <Mail size={16} />
              <a href="mailto:info@yadove.com">info@yadove.com</a>
            </li>
            <li>
              <MapPin size={16} />
              <span>
                {lang === 'ar' ? 'الرياض – جدة – المملكة العربية السعودية' : 'Riyadh – Jeddah – Saudi Arabia'}
              </span>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>{lang === 'ar' ? 'روابط سريعة' : 'Quick Links'}</h4>
          <ul>
            <li><a href="#services">{lang === 'ar' ? 'خدماتنا' : 'Services'}</a></li>
            <li><a href="#booking">{lang === 'ar' ? 'احجز الآن' : 'Book Now'}</a></li>
            <li><a href="#b2b">{lang === 'ar' ? 'عقود الشركات' : 'Corporate'}</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="container">
          <p>
            © {new Date().getFullYear()} Yadove Agency. 
            {lang === 'ar' ? ' جميع الحقوق محفوظة.' : ' All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  );
}