
import React from 'react';
import { Paintbrush, Layout, Shapes, PenTool, MonitorSmartphone, FileText } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <Paintbrush size={24} />,
    title: "Брендинг",
    description: "Разработка логотипов, фирменного стиля и всех элементов визуальной коммуникации бренда."
  },
  {
    icon: <Shapes size={24} />,
    title: "Айдентика",
    description: "Создание целостной системы визуальной идентификации для компаний и проектов."
  },
  {
    icon: <Layout size={24} />,
    title: "Веб-дизайн",
    description: "Проектирование пользовательских интерфейсов и разработка дизайна для сайтов и приложений."
  },
  {
    icon: <PenTool size={24} />,
    title: "Иллюстрация",
    description: "Создание авторских иллюстраций в минималистичном стиле для различных носителей."
  },
  {
    icon: <MonitorSmartphone size={24} />,
    title: "UI/UX Дизайн",
    description: "Проектирование интерфейсов и пользовательского опыта для цифровых продуктов."
  },
  {
    icon: <FileText size={24} />,
    title: "Печатная продукция",
    description: "Дизайн журналов, книг, буклетов и другой полиграфической продукции."
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-wider">Услуги</h2>
        <p className="mb-12 max-w-2xl">Предлагаю комплексные решения для визуальных коммуникаций.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-item">
              <div className="service-icon">
                {service.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
