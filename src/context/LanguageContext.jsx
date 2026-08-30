import { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  // Start with Arabic because we are in Saudi Arabia
  const [lang, setLang] = useState('ar'); // 'ar' or 'en'

  // Whenever language changes, flip the whole page direction
  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLanguage = () => {
    setLang(prev => (prev === 'ar' ? 'en' : 'ar'));
  };

  // Simple dictionary (we will grow this later)
  const t = {
    ar: {
      bookNow: 'احجز الآن',
      services: 'خدماتنا',
      home: 'الرئيسية',
      about: 'من نحن',
      contact: 'تواصل معنا',
      whatsapp: 'واتساب',
      call: 'اتصل الآن',
    },
    en: {
      bookNow: 'Book Now',
      services: 'Our Services',
      home: 'Home',
      about: 'About Us',
      contact: 'Contact',
      whatsapp: 'WhatsApp',
      call: 'Call Now',
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t: t[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Easy way to use the language anywhere
export function useLanguage() {
  return useContext(LanguageContext);
}