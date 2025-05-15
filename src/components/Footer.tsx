
import React from 'react';
import { Instagram, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background py-10 border-t border-border mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-sm">&copy; {new Date().getFullYear()} Имя Фамилия. Все права защищены.</p>
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="hover:text-muted-foreground" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-muted-foreground" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-muted-foreground" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="mailto:hello@example.com" className="hover:text-muted-foreground" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
