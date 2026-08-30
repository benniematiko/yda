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
      descEn: 'Deep and daily home & commercial cleaning with high standards'
    },
    {
      id: 2,
      icon: <ChefHat size={32} />,
      titleAr: 'الطبخ',
      titleEn: 'Cooking',
      descAr: 'طهي وجبات منزلية طازجة حسب طلبك',
      descEn: 'Fresh home-cooked meals prepared to your preference'
    },
    {
      id: 3,
      icon: <HeartHandshake size={32} />,
      titleAr: 'رعاية كبار السن',
      titleEn: 'Care Giving',
      descAr: 'رعاية صحية وشخصية محترفة لكبار السن',
      descEn: 'Professional health and personal care for the elderly'
    },
    {
      id: 4,
      icon: <Users size={32} />,
      titleAr: 'مربيات أطفال',
      titleEn: 'Nannies',
      descAr: 'مربيات مؤهلات لرعاية الأطفال في المنزل',
      descEn: 'Qualified nannies for full-time childcare at home'
    },
    {
      id: 5,
      icon: <Baby size={32} />,
      titleAr: 'جليسة أطفال',
      titleEn: 'Babysitting',
      descAr: 'رعاية مؤقتة وآمنة للأطفال عند الحاجة',
      descEn: 'Safe and reliable temporary babysitting when you need it'
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