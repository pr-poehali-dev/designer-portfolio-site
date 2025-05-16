import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { X } from "lucide-react";

// Типы для проектов портфолио
interface PortfolioItem {
  id: number;
  title: string;
  year: string;
  description: string;
  category: string;
  thumbnail: string;
  images: string[];
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Ребрендинг культурного центра",
    year: "2023",
    description:
      "Разработка новой визуальной идентичности для современного культурного центра. Проект включал создание логотипа, фирменного стиля и системы навигации.",
    category: "Брендинг",
    thumbnail:
      "https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600694778081-a9445e268a58?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  {
    id: 2,
    title: "Дизайн журнала об архитектуре",
    year: "2022",
    description:
      "Разработка концепции и дизайна ежеквартального журнала об архитектуре и городском пространстве. Фокус на типографике и минималистичной сетке.",
    category: "Печатный дизайн",
    thumbnail:
      "https://images.unsplash.com/photo-1584448097764-374f81551427?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1584448097764-374f81551427?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1594214499097-3e9a6b222c34?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  {
    id: 3,
    title: "Сайт для мебельного бренда",
    year: "2023",
    description:
      "Дизайн минималистичного интерфейса для производителя современной мебели. Акцент на удобстве использования и качественной презентации продукции.",
    category: "Веб-дизайн",
    thumbnail:
      "https://images.unsplash.com/photo-1552679549-21d1e7d4b69e?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1552679549-21d1e7d4b69e?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616627434852-097e535878d5?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  {
    id: 4,
    title: "Айдентика фестиваля дизайна",
    year: "2022",
    description:
      "Разработка визуальной концепции и айдентики для ежегодного фестиваля дизайна. Включая логотип, постеры, веб-сайт и маркетинговые материалы.",
    category: "Айдентика",
    thumbnail:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580283301023-40d9ea9f6974?q=80&w=1200&auto=format&fit=crop",
    ],
  },
];

const PortfolioSection: React.FC = () => {
  const [currentProject, setCurrentProject] = useState<PortfolioItem | null>(
    null,
  );
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-wider">
          Портфолио
        </h2>
        <p className="mb-12 max-w-2xl">
          Избранные проекты из различных областей графического дизайна.
        </p>

        <div className="portfolio-grid">
          {portfolioItems.map((item) => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <div
                  className="cursor-pointer group"
                  onClick={() => {
                    setCurrentProject(item);
                    setCurrentImageIndex(0);
                  }}
                >
                  {item.id === 3 && (
                    <div className="mb-4 overflow-hidden rounded-md">
                      <img
                        src="https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=800&auto=format&fit=crop"
                        alt="Декоративное изображение мебели"
                        className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="mb-3 overflow-hidden">
                    <AspectRatio ratio={4 / 3}>
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </AspectRatio>
                  </div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-sm">{item.category}</span>
                    <span className="text-sm">{item.year}</span>
                  </div>
                </div>
              </DialogTrigger>

              <DialogContent className="max-w-4xl p-0 overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold">{item.title}</h3>
                      <div className="flex mt-1 space-x-4">
                        <span className="text-sm">{item.category}</span>
                        <span className="text-sm">{item.year}</span>
                      </div>
                    </div>
                    <DialogClose className="p-1">
                      <X size={24} />
                    </DialogClose>
                  </div>

                  <div className="mb-6">
                    <img
                      src={item.images[currentImageIndex]}
                      alt={`${item.title} изображение ${currentImageIndex + 1}`}
                      className="w-full h-auto object-cover"
                    />
                    {item.images.length > 1 && (
                      <div className="flex space-x-2 mt-2">
                        {item.images.map((img, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-3 h-3 rounded-full ${currentImageIndex === index ? "bg-primary" : "bg-muted"}`}
                            aria-label={`Показать изображение ${index + 1}`}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  <p className="text-base">{item.description}</p>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
