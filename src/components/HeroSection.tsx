import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 dot-pattern relative"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8 md:col-start-3">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Мария Петрова
              <span className="block mt-4 text-xl md:text-2xl font-light">
                / Графический дизайнер
              </span>
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl">
              Создаю минималистичные, функциональные дизайн-решения,
              вдохновленные принципами швейцарской школы дизайна.
            </p>
            <div className="space-x-4">
              <a
                href="#portfolio"
                className="inline-block border border-primary px-6 py-3 hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Посмотреть работы
              </a>
              <a
                href="#contact"
                className="inline-block px-6 py-3 hover:underline"
              >
                Связаться
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Abstract geometric elements */}
      <div className="hidden md:block absolute right-[15%] top-[30%] w-12 h-12 border-2 border-primary"></div>
      <div className="hidden md:block absolute right-[10%] bottom-[20%] w-24 h-24 bg-primary"></div>
      <div className="hidden md:block absolute left-[10%] top-[25%] w-16 h-16 rounded-full border-2 border-primary"></div>
    </section>
  );
};

export default HeroSection;
