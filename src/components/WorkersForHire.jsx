// src/components/WorkersForHire.jsx
import { useLanguage } from '../context/LanguageContext';
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
            <strong>Payment Terms:</strong> Payment is due upon completion of the work.
          </div>

          {/* Pricing Grid */}
          <div className="workers-group">
            <h3 className="group-title">Cleaning Services</h3>
            <ul className="workers-list pricing-list">
              <li><span>Cleaning session</span> <strong>25 SAR / session</strong></li>
              <li><span>Full day (24 hours)</span> <strong>200 SAR</strong> <small>(staying at home)</small></li>
              <li><span>Two days</span> <strong>350 SAR</strong> <small>(staying at home)</small></li>
              <li><span>Five days</span> <strong>550 SAR</strong> <small>(staying at home)</small></li>
            </ul>
            <p className="disclaimer">* Prices do not include delivery.</p>
          </div>

          {/* Info Section Grid */}
          <div className="workers-info-grid">
            <div className="workers-group">
              <h3 className="group-title">Available Nationalities</h3>
              <ul className="workers-list pill-list">
                <li>Kenyan</li>
                <li>Tanzanian</li>
                <li>Ethiopian</li>
                <li>Ugandan</li>
              </ul>
            </div>

            <div className="workers-group">
              <h3 className="group-title">Why Choose Us</h3>
              <ul className="workers-list check-list">
                <li>✓ Experienced & trained staff</li>
                <li>✓ Available 24/7</li>
                <li>✓ Competitive rates</li>
                <li>✓ Fully insured</li>
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