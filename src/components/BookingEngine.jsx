// src/components/BookingEngine.jsx
import { useLanguage } from '../context/LanguageContext';
import { Phone, MessageCircle } from 'lucide-react';
import './BookingEngine.css';

export default function BookingEngine() {
  const { lang } = useLanguage();
  const phoneNumber = '966534851367';

  return (
    <section id="booking" className="booking-section">
      <div className="container">
        <div className="booking-grid">
          
          {/* Left Column: Title, Subtitle, Call/WhatsApp Actions & Overlay Box */}
          <div className="booking-left-col">
            <h2 className="booking-heading">
              {lang === 'ar' ? 'احجز خدمتك الآن' : 'Book for your service Now'}
            </h2>
            <p className="booking-subheading">
              {lang === 'ar'
                ? 'تواصل معنا مباشرة عبر الاتصال أو الواتساب للحصول على أفضل الخدمات المنزلية بسرعة وسهولة.'
                : 'Connect with us directly via phone call or WhatsApp for fast and reliable home services.'}
            </p>

            {/* Side-by-Side Flex Layout: Actions on left, Solid Banner aligned with Call button */}
            <div className="booking-left-row">
              <div className="booking-actions">
                <a href={`tel:${phoneNumber}`} className="action-btn btn-call">
                  <Phone size={22} />
                  <span>{lang === 'ar' ? 'اتصال هاتفي' : 'Voice Call'}</span>
                </a>

                <a
                  href={`https://wa.me/${phoneNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="action-btn btn-whatsapp"
                >
                  <MessageCircle size={22} />
                  <span>{lang === 'ar' ? 'واتساب' : 'WhatsApp'}</span>
                </a>
              </div>

              {/* Solid Overlay Banner Aligned with the Call Button */}
              <div className="overlay-banner">
                <p className="overlay-text">
                  {lang === 'ar' ? (
                    <>
                      خادمات بالساعة و الشهر متوفرات. هل ترغب في تقديم طلب؟ تواصل معنا{' '}
                      <a href={`tel:${phoneNumber}`} className="overlay-link" dir="ltr">
                        +{phoneNumber}
                      </a>
                    </>
                  ) : (
                    <>
                      Monthly Maids are available. Want to make a request? Let us talk{' '}
                      <a href={`tel:${phoneNumber}`} className="overlay-link" dir="ltr">
                        +{phoneNumber}
                      </a>
                    </>
                  )}
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: 4 Images Grid */}
          <div className="booking-right-col">
            <div className="image-card">
              <img
                src="/Workers-Riyadh-300x179.jpg"
                alt={lang === 'ar' ? 'خدماتنا المنزلية' : 'Home Services'}
                className="booking-img"
              />
            </div>
            <div className="image-card">
              <img
                src="/Maids-Saudi-Arabia-300x175.jpeg"
                alt={lang === 'ar' ? 'رعاية واهتمام' : 'Quality Care'}
                className="booking-img"
              />
            </div>
            <div className="image-card">
              <img
                src="/ladybucket.jpg"
                alt={lang === 'ar' ? 'خدمات احترافية' : 'Professional Services'}
                className="booking-img"
              />
            </div>
            <div className="image-card">
              <img
                src="/cooking-riyadh.jpg"
                alt={lang === 'ar' ? 'طاقم مؤهل' : 'Qualified Staff'}
                className="booking-img"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}