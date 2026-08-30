import { useLanguage } from '../context/LanguageContext';
import { MessageCircle } from 'lucide-react';
import './WhatsAppWidget.css';

export default function WhatsAppWidget() {
  const { lang } = useLanguage();

  const phoneNumber = '966534851367';
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-widget"
      aria-label="WhatsApp"
    >
      <MessageCircle size={28} />
      <span className="whatsapp-text">
        {lang === 'ar' ? 'واتساب' : 'WhatsApp'}
      </span>
    </a>
  );
}