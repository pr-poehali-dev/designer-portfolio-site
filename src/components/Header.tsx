import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background z-50 border-b border-border">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#home" className="text-lg font-bold">
          ИФ
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <a
                href="#home"
                className="hover:underline text-sm uppercase tracking-wide"
              >
                Главная
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:underline text-sm uppercase tracking-wide"
              >
                О себе
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="hover:underline text-sm uppercase tracking-wide"
              >
                Портфолио
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:underline text-sm uppercase tracking-wide"
              >
                Услуги
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:underline text-sm uppercase tracking-wide"
              >
                Контакты
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center p-2"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
        >
          {isMenuOpen ? (
            <div className="rounded-full p-2 bg-black">
              <X size={28} className="text-white" />
            </div>
          ) : (
            <Menu size={24} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-background pt-16 z-40">
          {/* Extra Close Button at Top-Right for Better Visibility */}
          <button
            className="absolute top-4 right-4 p-2 rounded-full bg-black"
            onClick={toggleMenu}
            aria-label="Закрыть меню"
          >
            <X size={28} className="text-white" />
          </button>

          <nav className="container mx-auto px-4">
            <ul className="flex flex-col space-y-6 items-center text-center pt-10">
              <li>
                <a
                  href="#home"
                  className="text-2xl uppercase tracking-wide"
                  onClick={toggleMenu}
                >
                  Главная
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-2xl uppercase tracking-wide"
                  onClick={toggleMenu}
                >
                  О себе
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="text-2xl uppercase tracking-wide"
                  onClick={toggleMenu}
                >
                  Портфолио
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-2xl uppercase tracking-wide"
                  onClick={toggleMenu}
                >
                  Услуги
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-2xl uppercase tracking-wide"
                  onClick={toggleMenu}
                >
                  Контакты
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
