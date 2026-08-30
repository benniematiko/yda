import { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  // Fixed to English only
  const [lang] = useState('en');

  // Set page direction and language to English
  document.documentElement.dir = 'ltr';
  document.documentElement.lang = 'en';

  // No toggle function needed

  // Simple dictionary - English only
  const t = {
    bookNow: 'Book Now',
    services: 'Our Services',
    home: 'Home',
    about: 'About Us',
    contact: 'Contact',
    whatsapp: 'WhatsApp',
    call: 'Call Now',
  };

  return (
    <LanguageContext.Provider value={{ lang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Easy way to use the language anywhere
export function useLanguage() {
  return useContext(LanguageContext);
}