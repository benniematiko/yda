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
      descEn: 'Deep and daily home & commercial cleaning with high standards',
      price: 80,
      unitAr: 'ريال / ساعة',
      unitEn: 'SAR / hour'
    },
    {
      id: 2,
      icon: <ChefHat size={32} />,
      titleAr: 'الطبخ',
      titleEn: 'Cooking',
      descAr: 'طهي وجبات منزلية طازجة حسب طلبك',
      descEn: 'Fresh home-cooked meals prepared to your preference',
      price: 100,
      unitAr: 'ريال / ساعة',
      unitEn: 'SAR / hour'
    },
    {
      id: 3,
      icon: <HeartHandshake size={32} />,
      titleAr: 'رعاية كبار السن',
      titleEn: 'Care Giving',
      descAr: 'رعاية صحية وشخصية محترفة لكبار السن',
      descEn: 'Professional health and personal care for the elderly',
      price: 120,
      unitAr: 'ريال / ساعة',
      unitEn: 'SAR / hour'
    },
    {
      id: 4,
      icon: <Users size={32} />,
      titleAr: 'مربيات أطفال',
      titleEn: 'Nannies',
      descAr: 'مربيات مؤهلات لرعاية الأطفال في المنزل',
      descEn: 'Qualified nannies for full-time childcare at home',
      price: 150,
      unitAr: 'ريال / ساعة',
      unitEn: 'SAR / hour'
    },
    {
      id: 5,
      icon: <Baby size={32} />,
      titleAr: 'جليسة أطفال',
      titleEn: 'Babysitting',
      descAr: 'رعاية مؤقتة وآمنة للأطفال عند الحاجة',
      descEn: 'Safe and reliable temporary babysitting when you need it',
      price: 90,
      unitAr: 'ريال / ساعة',
      unitEn: 'SAR / hour'
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
              <div className="service-price">
                <span className="price">{service.price}</span>
                <span className="unit">
                  {lang === 'ar' ? service.unitAr : service.unitEn}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}