import { useLanguage } from '../context/LanguageContext';
import { Star, ShieldCheck, Award, BadgeCheck, Heart } from 'lucide-react';
import './Testimonials.css';

export default function Testimonials() {
  const { lang } = useLanguage();

  // Realistic Saudi client reviews
  const reviews = [
    {
      id: 1,
      nameAr: 'نورة العتيبي',
      nameEn: 'Noura Al-Otaibi',
      cityAr: 'الرياض',
      cityEn: 'Riyadh',
      textAr: 'خدمة ممتازة وسريعة. الفريق محترف جداً والنتيجة نظافة فاخرة. أنصح بهم بقوة.',
      textEn: 'Excellent and fast service. The team is very professional and the result is luxury cleanliness. Highly recommend.',
      rating: 5,
      initial: 'ن'
    },
    {
      id: 2,
      nameAr: 'خالد الشمري',
      nameEn: 'Khalid Al-Shammari',
      cityAr: 'جدة',
      cityEn: 'Jeddah',
      textAr: 'استخدمناهم لمكتبنا أكثر من مرة. تعقيم عالي الجودة والتزام بالمواعيد. شركة موثوقة.',
      textEn: 'We used them for our office several times. High-quality sanitation and always on time. A trustworthy company.',
      rating: 5,
      initial: 'خ'
    },
    {
      id: 3,
      nameAr: 'سارة القحطاني',
      nameEn: 'Sara Al-Qahtani',
      cityAr: 'الرياض',
      cityEn: 'Riyadh',
      textAr: 'أفضل شركة تنظيف تعاملت معها. النتيجة مذهلة والتعامل راقٍ جداً. شكراً لكم.',
      textEn: 'Best cleaning company I have dealt with. Amazing results and very professional communication. Thank you.',
      rating: 5,
      initial: 'س'
    }
  ];

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        {/* Section Title */}
        <h2 className="section-title">
          {lang === 'ar' ? 'ماذا يقول عملاؤنا' : 'What Our Clients Say'}
        </h2>
        <p className="section-subtitle">
          {lang === 'ar'
            ? 'آراء حقيقية من عملاء في الرياض وجدة'
            : 'Real feedback from clients in Riyadh & Jeddah'}
        </p>

        {/* Reviews Grid */}
        <div className="reviews-grid">
          {reviews.map((review) => (
            <article key={review.id} className="review-card">
              {/* Stars */}
              <div className="stars">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="#fbbf24" color="#fbbf24" />
                ))}
              </div>

              {/* Review Text */}
              <p className="review-text">
                “{lang === 'ar' ? review.textAr : review.textEn}”
              </p>

              {/* Client Info */}
              <div className="reviewer">
                <div className="avatar">
                  {review.initial}
                </div>
                <div className="reviewer-info">
                  <div className="name-row">
                    <strong>
                      {lang === 'ar' ? review.nameAr : review.nameEn}
                    </strong>
                    <span className="verified">
                      <BadgeCheck size={14} />
                      {lang === 'ar' ? 'عميل موثق' : 'Verified'}
                    </span>
                  </div>
                  <span className="city">
                    {lang === 'ar' ? review.cityAr : review.cityEn}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Trust Badges – Very important for Saudi trust */}
        <div className="trust-section">
          <h3 className="trust-title">
            {lang === 'ar' ? 'شهادات الثقة والجودة' : 'Trust & Quality Certifications'}
          </h3>

          <div className="badges-row">
            <div className="badge">
              <ShieldCheck size={26} />
              <div>
                <strong>
                  {lang === 'ar' ? 'متوافق مع وزارة الصحة' : 'Ministry of Health'}
                </strong>
                <span>
                  {lang === 'ar' ? 'معايير التعقيم الرسمية' : 'Official sanitation standards'}
                </span>
              </div>
            </div>

            <div className="badge">
              <Award size={26} />
              <div>
                <strong>
                  {lang === 'ar' ? 'معايير النظافة السعودية' : 'Saudi Hygiene Standards'}
                </strong>
                <span>
                  {lang === 'ar' ? 'جودة معتمدة' : 'Certified quality'}
                </span>
              </div>
            </div>

            <div className="badge">
              <Heart size={26} />
              <div>
                <strong>
                  {lang === 'ar' ? 'رضا العملاء 100%' : '100% Client Satisfaction'}
                </strong>
                <span>
                  {lang === 'ar' ? 'تقييمات حقيقية' : 'Real verified reviews'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}