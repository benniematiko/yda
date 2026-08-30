import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import './BookingEngine.css';

export default function BookingEngine() {
  const { lang } = useLanguage();

  // ===== ONE clean state object for the whole booking =====
  const [booking, setBooking] = useState({
    step: 1,                    // current step (1, 2 or 3)
    service: null,              // selected service object
    date: '',                   // selected date
    shift: 'morning',           // 'morning' or 'afternoon'
    name: '',
    phone: '',
    address: ''
  });

  // Service options with SAR prices
  const serviceOptions = [
    {
      id: 'hourly',
      titleAr: 'خدمة خادمة بالساعة',
      titleEn: 'Hourly Maid Service',
      price: 80,
      unitAr: 'ريال / ساعة',
      unitEn: 'SAR / hour'
    },
    {
      id: 'deep',
      titleAr: 'تنظيف عميق',
      titleEn: 'Deep Cleaning',
      price: 450,
      unitAr: 'ريال / زيارة',
      unitEn: 'SAR / visit'
    },
    {
      id: 'commercial',
      titleAr: 'تعقيم تجاري',
      titleEn: 'Commercial Sanitation',
      price: 1200,
      unitAr: 'ريال / يوم',
      unitEn: 'SAR / day'
    }
  ];

  // Helper to update any field in the booking object
  const updateBooking = (field, value) => {
    setBooking(prev => ({ ...prev, [field]: value }));
  };

  // Go to next step (with simple validation)
  const nextStep = () => {
    if (booking.step === 1 && !booking.service) {
      alert(lang === 'ar' ? 'الرجاء اختيار خدمة' : 'Please select a service');
      return;
    }
    if (booking.step === 2 && !booking.date) {
      alert(lang === 'ar' ? 'الرجاء اختيار التاريخ' : 'Please select a date');
      return;
    }
    updateBooking('step', booking.step + 1);
  };

  // Go back one step
  const prevStep = () => {
    updateBooking('step', booking.step - 1);
  };

  // Final submit – log the payload to console (production would send to API)
  const confirmBooking = () => {
    if (!booking.name || !booking.phone || !booking.address) {
      alert(lang === 'ar' ? 'الرجاء تعبئة جميع الحقول' : 'Please fill all fields');
      return;
    }

    const payload = {
      service: booking.service,
      date: booking.date,
      shift: booking.shift,
      name: booking.name,
      phone: booking.phone,
      address: booking.address,
      totalSAR: booking.service?.price || 0,
      language: lang
    };

    console.log('✅ BOOKING CONFIRMED – Payload ready for API:', payload);
    alert(lang === 'ar' 
      ? 'تم تأكيد الحجز بنجاح! سنتواصل معك قريباً' 
      : 'Booking confirmed! We will contact you soon');
    
    // Reset form after success
    setBooking({
      step: 1,
      service: null,
      date: '',
      shift: 'morning',
      name: '',
      phone: '',
      address: ''
    });
  };

  return (
    <section id="booking" className="booking-section">
      <div className="container">
        <h2 className="section-title">
          {lang === 'ar' ? 'احجز خدمتك الآن' : 'Book Your Service Now'}
        </h2>

        {/* Progress indicator */}
        <div className="progress-bar">
          <div className={`progress-step ${booking.step >= 1 ? 'active' : ''}`}>1</div>
          <div className={`progress-line ${booking.step >= 2 ? 'active' : ''}`}></div>
          <div className={`progress-step ${booking.step >= 2 ? 'active' : ''}`}>2</div>
          <div className={`progress-line ${booking.step >= 3 ? 'active' : ''}`}></div>
          <div className={`progress-step ${booking.step >= 3 ? 'active' : ''}`}>3</div>
        </div>

        <div className="booking-card">
          {/* ========== STEP 1: Service Selection ========== */}
          {booking.step === 1 && (
            <div className="step-content">
              <h3 className="step-title">
                {lang === 'ar' ? 'اختر الخدمة' : 'Select Service'}
              </h3>

              <div className="service-options">
                {serviceOptions.map((opt) => (
                  <button
                    key={opt.id}
                    className={`service-option ${booking.service?.id === opt.id ? 'selected' : ''}`}
                    onClick={() => updateBooking('service', opt)}
                  >
                    <span className="opt-title">
                      {lang === 'ar' ? opt.titleAr : opt.titleEn}
                    </span>
                    <span className="opt-price">
                      {opt.price} {lang === 'ar' ? opt.unitAr : opt.unitEn}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ========== STEP 2: Date & Shift ========== */}
          {booking.step === 2 && (
            <div className="step-content">
              <h3 className="step-title">
                {lang === 'ar' ? 'اختر التاريخ والوقت' : 'Choose Date & Time'}
              </h3>

              <label className="field-label">
                {lang === 'ar' ? 'التاريخ' : 'Date'}
              </label>
              <input
                type="date"
                className="form-input"
                value={booking.date}
                onChange={(e) => updateBooking('date', e.target.value)}
                min={new Date().toISOString().split('T')[0]}
              />

              <label className="field-label" style={{ marginTop: '1.5rem' }}>
                {lang === 'ar' ? 'الفترة' : 'Preferred Shift'}
              </label>

              <div className="shift-toggle">
                <button
                  className={`shift-btn ${booking.shift === 'morning' ? 'active' : ''}`}
                  onClick={() => updateBooking('shift', 'morning')}
                >
                  {lang === 'ar' ? 'صباحي (8ص - 12م)' : 'Morning (8 AM - 12 PM)'}
                </button>
                <button
                  className={`shift-btn ${booking.shift === 'afternoon' ? 'active' : ''}`}
                  onClick={() => updateBooking('shift', 'afternoon')}
                >
                  {lang === 'ar' ? 'مسائي (1م - 5م)' : 'Afternoon (1 PM - 5 PM)'}
                </button>
              </div>
            </div>
          )}

          {/* ========== STEP 3: Contact & Location ========== */}
          {booking.step === 3 && (
            <div className="step-content">
              <h3 className="step-title">
                {lang === 'ar' ? 'بيانات التواصل والموقع' : 'Contact & Location'}
              </h3>

              <label className="field-label">
                {lang === 'ar' ? 'الاسم الكامل' : 'Full Name'}
              </label>
              <input
                type="text"
                className="form-input"
                value={booking.name}
                onChange={(e) => updateBooking('name', e.target.value)}
                placeholder={lang === 'ar' ? 'مثال: أحمد محمد' : 'e.g. Ahmed Mohammed'}
              />

              <label className="field-label">
                {lang === 'ar' ? 'رقم الجوال' : 'Phone Number'}
              </label>
              <input
                type="tel"
                className="form-input"
                value={booking.phone}
                onChange={(e) => updateBooking('phone', e.target.value)}
                placeholder="05xxxxxxxx"
                dir="ltr"   /* phone numbers stay LTR even in Arabic */
              />

              <label className="field-label">
                {lang === 'ar' 
                  ? 'العنوان الوطني أو أقرب معلم' 
                  : 'Saudi National Address or Nearest Landmark'}
              </label>
              <textarea
                className="form-input textarea"
                rows="3"
                value={booking.address}
                onChange={(e) => updateBooking('address', e.target.value)}
                placeholder={lang === 'ar' 
                  ? 'مثال: حي النرجس، الرياض – بجوار مسجد الراجحي' 
                  : 'e.g. Al Narjis District, Riyadh – near Al Rajhi Mosque'}
              />
            </div>
          )}

          {/* Navigation buttons */}
          <div className="step-actions">
            {booking.step > 1 && (
              <button className="btn-secondary" onClick={prevStep}>
                <ArrowLeft size={18} />
                {lang === 'ar' ? 'السابق' : 'Back'}
              </button>
            )}

            {booking.step < 3 ? (
              <button className="btn-primary" onClick={nextStep}>
                {lang === 'ar' ? 'التالي' : 'Next'}
                <ArrowRight size={18} />
              </button>
            ) : (
              <button className="btn-confirm" onClick={confirmBooking}>
                <CheckCircle size={20} />
                {lang === 'ar' ? 'تأكيد الحجز' : 'Confirm Booking'}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}