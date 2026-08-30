import { LanguageProvider } from './context/LanguageContext';

// Layout & Navigation
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Main Sections
import Hero from './components/Hero';
import WorkersForHire from './components/WorkersForHire';
import ServicesGrid from './components/ServicesGrid';
import BookingEngine from './components/BookingEngine';
import B2BForm from './components/B2BForm';
import Testimonials from './components/Testimonials';

// Sticky Widgets
import CallWidget from './components/CallWidget';
import WhatsAppWidget from './components/WhatsAppWidget';

import './App.css';

function App() {
  return (
    <LanguageProvider>
      <div className="app">
        {/* Sticky Navigation */}
        <Navbar />

        {/* Main Content */}
        <main>
          <Hero />
          <WorkersForHire />
          <ServicesGrid />
          <BookingEngine />
          <B2BForm />
          <Testimonials />
        </main>

        {/* Footer */}
        <Footer />

        {/* Sticky Contact Buttons */}
        <CallWidget />
        <WhatsAppWidget />
      </div>
    </LanguageProvider>
  );
}

export default App;