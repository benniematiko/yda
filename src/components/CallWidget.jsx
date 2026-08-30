import { useLanguage } from '../context/LanguageContext';
import { Phone } from 'lucide-react';
import './CallWidget.css';

export default function CallWidget() {
  const { lang } = useLanguage();

  return (
    <a
      href="tel:+966500000000"
      className="call-widget"
      aria-label={lang === 'ar' ? 'اتصل الآن' : 'Call Now'}
    >
      <Phone size={22} />
      <span className="call-text">
        {lang === 'ar' ? 'اتصل' : 'Call'}
      </span>
    </a>
  );
}