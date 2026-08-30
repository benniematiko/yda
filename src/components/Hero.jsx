import { useLanguage } from '../context/LanguageContext';
import './Hero.css';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="hero">
      {/* Background placeholder – later you can put a real video */}
      <div className="hero-bg"></div>

      <div className="hero-content">
        <h1 className="hero-title">
          {t.bookNow === 'احجز الآن'
            ? 'نظافة فاخرة… ثقة سعودية'
            : 'Maids Workers per hour 25 riyals '}  
        </h1>

        <p className="hero-subtitle">
          {t.bookNow === 'احجز الآن'
            ? 'خدمة تنظيف وتعقيم احترافية للمنازل والمكاتب في الرياض وجدة'
            : 'Professional cleaning & sanitation for homes and offices in Riyadh & Jeddah'}
        </p>

        <a href="#booking" className="hero-cta">
          {t.bookNow}
        </a>
      </div>
    </section>
  );
}