// src/components/Hero.jsx
import { useLanguage } from '../context/LanguageContext';
import './Hero.css';

export default function Hero() {
  const { t } = useLanguage();
  const isArabic = t.bookNow === 'احجز الآن';

  return (
    <section id="home" className="hero" dir={isArabic ? 'rtl' : 'ltr'}>
      {/* Background Overlay */}
      <div className="hero-bg"></div>

      <div className="hero-container">
        <div className="hero-content">
          {/* Badge */}
          <div className="hero-badge">
            <span className="badge-dot"></span>
            {isArabic ? '25 ريال / الساعة' : '25 SAR / Hour'}
          </div>

          {/* Heading */}
          <h1 className="hero-title">
            {isArabic
              ? 'نظافة فاخرة… ثقة سعودية'
              : 'Professional Maid & Cleaning Services'}
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle">
            {isArabic
              ? 'خدمة تنظيف وتعقيم احترافية للمنازل والمكاتب في الرياض وجدة'
              : 'Reliable, trained hourly maid services for homes and offices across Riyadh and Jeddah.'}
          </p>

          {/* Action Buttons - No borders */}
          <div className="hero-actions">
            <a href="#booking" className="hero-cta primary">
              {t.bookNow}
            </a>
            <a href="tel:+966534851367" className="hero-cta secondary">
              {isArabic ? 'اتصل بنا' : 'Call Us'}
            </a>
          </div>

          {/* Key Value Points */}
          <div className="hero-stats">
            <div className="stat-item">
              <strong>24/7</strong>
              <span>{isArabic ? 'خدمة متواصلة' : 'Availability'}</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <strong>100%</strong>
              <span>{isArabic ? 'جودة وموثوقية' : 'Satisfaction'}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}