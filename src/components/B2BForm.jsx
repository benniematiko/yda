import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Building2, Send, CheckCircle2, Shield } from 'lucide-react';
import './B2BForm.css';

export default function B2BForm() {
  const { lang } = useLanguage();

  const [form, setForm] = useState({
    companyName: '',
    crNumber: '',
    contactPerson: '',
    phone: '',
    email: '',
    scope: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateForm = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!form.companyName.trim() || !form.phone.trim() || !form.scope.trim()) {
      alert(lang === 'ar'
        ? 'الرجاء تعبئة الحقول المطلوبة (*)'
        : 'Please fill all required fields (*)');
      return;
    }

    setIsSubmitting(true);

    // Simulate sending to server (in real app you would call an API here)
    setTimeout(() => {
      const payload = {
        type: 'B2B Corporate Inquiry',
        ...form,
        submittedAt: new Date().toISOString(),
        language: lang
      };

      console.log('🏢 B2B INQUIRY SUBMITTED:', payload);

      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset form after success
      setForm({
        companyName: '',
        crNumber: '',
        contactPerson: '',
        phone: '',
        email: '',
        scope: ''
      });
    }, 900);
  };

  // Success screen
  if (isSubmitted) {
    return (
      <section id="b2b" className="b2b-section">
        <div className="container">
          <div className="success-card">
            <CheckCircle2 size={56} className="success-icon" />
            <h2>
              {lang === 'ar' ? 'تم إرسال طلبكم بنجاح' : 'Inquiry Submitted Successfully'}
            </h2>
            <p>
              {lang === 'ar'
                ? 'شكراً لاهتمامكم. سيتواصل معكم فريق الشركات خلال 24 ساعة عمل.'
                : 'Thank you for your interest. Our corporate team will contact you within 24 business hours.'}
            </p>
            <button
              className="back-btn"
              onClick={() => setIsSubmitted(false)}
            >
              {lang === 'ar' ? 'إرسال طلب آخر' : 'Submit Another Inquiry'}
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="b2b" className="b2b-section">
      <div className="container">
        {/* Header */}
        <div className="b2b-header">
          <div className="b2b-icon-wrapper">
            <Building2 size={32} />
          </div>
          <h2 className="section-title">
            {lang === 'ar' ? 'عقود الشركات والمؤسسات' : 'Corporate & Institutional Contracts'}
          </h2>
          <p className="b2b-subtitle">
            {lang === 'ar'
              ? 'نقدم حلول تنظيف وتعقيم احترافية للمكاتب والمدارس والمولات والمستشفيات'
              : 'Professional cleaning & sanitation solutions for offices, schools, malls and hospitals'}
          </p>
        </div>

        {/* Form Card */}
        <form className="b2b-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>
                {lang === 'ar' ? 'اسم الشركة' : 'Company Name'}
                <span className="required">*</span>
              </label>
              <input
                type="text"
                value={form.companyName}
                onChange={(e) => updateForm('companyName', e.target.value)}
                placeholder={lang === 'ar' ? 'مثال: شركة الأمل للتجارة' : 'e.g. Al Amal Trading Co.'}
              />
            </div>

            <div className="form-group">
              <label>
                {lang === 'ar' ? 'رقم السجل التجاري (CR)' : 'Commercial Registration (CR)'}
              </label>
              <input
                type="text"
                value={form.crNumber}
                onChange={(e) => updateForm('crNumber', e.target.value)}
                placeholder="1010xxxxxx"
                dir="ltr"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>
                {lang === 'ar' ? 'اسم المسؤول' : 'Contact Person'}
              </label>
              <input
                type="text"
                value={form.contactPerson}
                onChange={(e) => updateForm('contactPerson', e.target.value)}
                placeholder={lang === 'ar' ? 'الاسم الكامل' : 'Full name'}
              />
            </div>

            <div className="form-group">
              <label>
                {lang === 'ar' ? 'رقم الجوال' : 'Phone Number'}
                <span className="required">*</span>
              </label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => updateForm('phone', e.target.value)}
                placeholder="05xxxxxxxx"
                dir="ltr"
              />
            </div>
          </div>

          <div className="form-group">
            <label>
              {lang === 'ar' ? 'البريد الإلكتروني' : 'Email Address'}
            </label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => updateForm('email', e.target.value)}
              placeholder="name@company.com"
              dir="ltr"
            />
          </div>

          <div className="form-group">
            <label>
              {lang === 'ar' ? 'نطاق العمل المطلوب' : 'Scope of Work'}
              <span className="required">*</span>
            </label>
            <textarea
              rows="4"
              value={form.scope}
              onChange={(e) => updateForm('scope', e.target.value)}
              placeholder={lang === 'ar'
                ? 'مثال: تنظيف يومي لـ 3 طوابق مكتبية + تعقيم أسبوعي...'
                : 'e.g. Daily cleaning for 3 office floors + weekly deep sanitation...'}
            />
          </div>

          {/* Trust note */}
          <div className="trust-note">
            <Shield size={18} />
            <span>
              {lang === 'ar'
                ? 'بياناتكم محمية وسرية. سنتواصل معكم خلال 24 ساعة عمل.'
                : 'Your data is secure and confidential. We will contact you within 24 business hours.'}
            </span>
          </div>

          <button
            type="submit"
            className="b2b-submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              lang === 'ar' ? 'جاري الإرسال...' : 'Sending...'
            ) : (
              <>
                <Send size={18} />
                {lang === 'ar' ? 'إرسال طلب الشركات' : 'Submit Corporate Inquiry'}
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}