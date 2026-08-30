import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import BookingEngine from './components/BookingEngine';
import WhatsAppWidget from './components/WhatsAppWidget';
// We will add B2B and Testimonials in the next lesson
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <div className="app">
        <Navbar />
        <Hero />
        <ServicesGrid />
        <BookingEngine />
        <WhatsAppWidget />
      </div>
    </LanguageProvider>
  );
}

export default App;