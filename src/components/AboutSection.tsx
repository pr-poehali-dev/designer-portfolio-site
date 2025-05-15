
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 uppercase tracking-wider">О себе</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="aspect-square bg-muted overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1580518324671-c2f0833a3af3?q=80&w=800&auto=format&fit=crop" 
                  alt="Портрет дизайнера" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-primary bg-background z-10"></div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-4">Привет, я графический дизайнер из Москвы</h3>
            <p className="mb-4">
              Более 7 лет я работаю в сфере визуальных коммуникаций, специализируясь на создании минималистичных, 
              функциональных и эстетически сбалансированных проектов.
            </p>
            <p className="mb-4">
              Мой подход к дизайну вдохновлен принципами швейцарской школы — чистота, точность и внимание к типографике. 
              Я верю, что хороший дизайн должен решать конкретные задачи и быть интуитивно понятным.
            </p>
            <p className="mb-6">
              Работал с клиентами из различных отраслей: от технологических стартапов до культурных институций. 
              Каждый проект для меня — это возможность найти лаконичное решение сложной коммуникационной задачи.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <h4 className="text-lg font-bold mb-2">Образование</h4>
                <p className="text-sm">Магистр графического дизайна, РАНХиГС</p>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-2">Опыт</h4>
                <p className="text-sm">7+ лет коммерческого опыта</p>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-2">Локация</h4>
                <p className="text-sm">Москва, Россия</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
