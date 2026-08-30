import { useLanguage } from '../context/LanguageContext';
import { MessageCircle } from 'lucide-react';
import './WhatsAppWidget.css';

export default function WhatsAppWidget() {
  const { lang } = useLanguage();

  // Replace with your real Saudi WhatsApp number (with country code, no +)
  const phoneNumber = '966500000000';
  const message = lang === 'ar' 
    ? 'مرحباً، أريد الاستفسار عن خدمات التنظيف'
    : 'Hello, I would like to inquire about cleaning services';

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

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