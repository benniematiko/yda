// src/components/WorkersForHire.jsx
import { useLanguage } from '../context/LanguageContext';
import { CheckCircle2 } from 'lucide-react';
import './WorkersForHire.css';

export default function WorkersForHire() {
  const { t } = useLanguage();

  return (
    <section id="workers" className="workers-section">
      <div className="workers-container">
        
        {/* Left Side - Image with Contact Badge Overlay */}
        <div className="workers-image-wrapper">
          <img 
            src="/ladystanding.jpg" 
            alt="Workers for hire" 
            className="workers-image"
          />
          <div className="workers-contact-badge">
            <span className="badge-title">For inquiries, let us talk</span>
            <a href="tel:+966534851367" className="badge-phone">+966 53 485 1367</a>
          </div>
        </div>

        {/* Right Side - Organized Content */}
        <div className="workers-content">
          <h2 className="workers-title">
            Workers for hire by the hour, day, or month
          </h2>
          <p className="workers-description">
            Professional, reliable, and trained staff ready to handle all your home cleaning needs.
          </p>

          <div className="workers-payment-note">
            <strong className="payment-label">Payment Terms:</strong> Payment is due upon completion of the work.
          </div>

          {/* Pricing Grid */}
          <div className="workers-group">
            <h3 className="group-title">Cleaning Services</h3>
            <ul className="workers-list pricing-list">
              <li>
                <span className="service-name">Cleaning session</span> 
                <strong className="price-tag">25 SAR <small>/ session</small></strong>
              </li>
              <li>
                <span className="service-name">
                  Full day (24 hours) <small className="duration-note">(staying at home)</small>
                </span> 
                <strong className="price-tag">200 SAR</strong>
              </li>
              <li>
                <span className="service-name">
                  Two days <small className="duration-note">(staying at home)</small>
                </span> 
                <strong className="price-tag">350 SAR</strong>
              </li>
              <li>
                <span className="service-name">
                  Five days <small className="duration-note">(staying at home)</small>
                </span> 
                <strong className="price-tag">550 SAR</strong>
              </li>
            </ul>
            <p className="disclaimer">* Prices do not include delivery.</p>
          </div>

          {/* Info Section Grid */}
          <div className="workers-info-grid">
            <div className="workers-group">
              <h3 className="group-title">Available Nationalities</h3>
              <ul className="workers-list pill-list">
                <li>Burundian</li>
                <li>Kenyan</li>
                <li>Tanzanian</li>
                <li>Ethiopian</li>
                <li>Ugandan</li>
              </ul>
            </div>

            <div className="workers-group">
              <h3 className="group-title">Why Choose Us</h3>
              <ul className="workers-list check-list">
                <li><CheckCircle2 size={16} className="check-icon" /> Experienced & trained staff</li>
                <li><CheckCircle2 size={16} className="check-icon" /> Available 24/7</li>
                <li><CheckCircle2 size={16} className="check-icon" /> Competitive rates</li>
                <li><CheckCircle2 size={16} className="check-icon" /> Fully insured</li>
              </ul>
            </div>
          </div>

          <a href="#booking" className="workers-cta">
            Book Now
          </a>
        </div>

      </div>
    </section>
  );
}