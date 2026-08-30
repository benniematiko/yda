import { useLanguage } from '../context/LanguageContext';
import { Home, Building2, Sparkles } from 'lucide-react';
import './ServicesGrid.css';

export default function ServicesGrid() {
  const { lang, t } = useLanguage();

  // Service data (prices in SAR)
  const services = [
    {
      id: 1,
      icon: <Home size={32} />,
      titleAr: 'خدمة خادمة بالساعة',
      titleEn: 'Hourly Maid Service',
      descAr: 'تنظيف يومي مرن حسب احتياجك',
      descEn: 'Flexible daily cleaning as needed',
      price: 80,
      unitAr: 'ريال / ساعة',
      unitEn: 'SAR / hour'
    },
    {
      id: 2,
      icon: <Sparkles size={32} />,
      titleAr: 'تنظيف عميق',
      titleEn: 'Deep Cleaning',
      descAr: 'تنظيف شامل للمطبخ والحمامات والأرضيات',
      descEn: 'Full deep clean for kitchen, bathrooms & floors',
      price: 450,
      unitAr: 'ريال / زيارة',
      unitEn: 'SAR / visit'
    },
    {
      id: 3,
      icon: <Building2 size={32} />,
      titleAr: 'تعقيم تجاري',
      titleEn: 'Commercial Sanitation',
      descAr: 'تعقيم مكاتب ومدارس ومولات',
      descEn: 'Sanitation for offices, schools & malls',
      price: 1200,
      unitAr: 'ريال / يوم',
      unitEn: 'SAR / day'
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