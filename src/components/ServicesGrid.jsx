// src/components/ServicesGrid.jsx
import { useLanguage } from '../context/LanguageContext';
import { 
  Sparkles, 
  ChefHat, 
  HeartHandshake, 
  Users, 
  Baby 
} from 'lucide-react';
import './ServicesGrid.css';

export default function ServicesGrid() {
  const { lang } = useLanguage();

  const services = [
    {
      id: 1,
      icon: <Sparkles size={32} />,
      titleAr: 'التنظيف',
      titleEn: 'Cleaning',
      descAr: 'تنظيف منزلي وتجاري عميق ويومي بمعايير عالية',
      descEn: 'Our dedicated cleaning team ensures every corner of your home or workplace sparkles with cleanliness. From routine cleaning to deep cleaning, we\'ve got you covered.'
    },
    {
      id: 2,
      icon: <ChefHat size={32} />,
      titleAr: 'الطبخ',
      titleEn: 'Cooking',
      descAr: 'طهي وجبات منزلية طازجة حسب طلبك',
      descEn: 'Enjoy delicious, home-cooked meals without the hassle. Our expert cooks prepare nutritious and mouthwatering dishes tailored to your preferences.'
    },
    {
      id: 3,
      icon: <HeartHandshake size={32} />,
      titleAr: 'رعاية كبار السن',
      titleEn: 'Care Giving',
      descAr: 'رعاية صحية وشخصية محترفة لكبار السن',
      descEn: 'We provide compassionate care for your loved ones, offering support, companionship, and assistance with daily tasks to improve their quality of life.'
    },
    {
      id: 4,
      icon: <Users size={32} />,
      titleAr: 'مربيات أطفال',
      titleEn: 'Nannies',
      descAr: 'مربيات مؤهلات لرعاية الأطفال في المنزل',
      descEn: 'Trust our experienced nannies to care for your children with love and attention. We ensure a safe and nurturing environment for your little ones.'
    },
    {
      id: 5,
      icon: <Baby size={32} />,
      titleAr: 'جليسة أطفال',
      titleEn: 'Babysitting',
      descAr: 'رعاية مؤقتة وآمنة للأطفال عند الحاجة',
      descEn: 'When you need a trustworthy babysitter for a few hours or an evening out, count on us. Your child\'s safety and happiness are our top priorities.'
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className="section-title">
          {lang === 'ar' ? 'خدماتنا المميزة' : 'Our Premium Services'}
        </h2>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">
                {lang === 'ar' ? service.titleAr : service.titleEn}
              </h3>
              <p className="service-desc">
                {lang === 'ar' ? service.descAr : service.descEn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}