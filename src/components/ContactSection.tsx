
import React from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-wider">Контакты</h2>
        <p className="mb-12 max-w-2xl">Готов обсудить ваш проект? Свяжитесь со мной с помощью формы или используйте контактные данные ниже.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold">Имя</label>
                  <Input id="name" placeholder="Ваше имя" className="border-black" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold">Email</label>
                  <Input id="email" type="email" placeholder="Ваш email" className="border-black" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-bold">Тема</label>
                <Input id="subject" placeholder="Тема сообщения" className="border-black" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold">Сообщение</label>
                <Textarea 
                  id="message" 
                  placeholder="Расскажите о вашем проекте..." 
                  className="border-black min-h-[150px]"
                />
              </div>
              
              <Button type="submit" className="w-full bg-black text-white hover:bg-black/80">
                Отправить сообщение
              </Button>
            </form>
          </div>
          
          <div>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Контактная информация</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <Mail size={20} className="mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold">Email</p>
                      <a href="mailto:hello@example.com" className="hover:underline">hello@example.com</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Phone size={20} className="mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold">Телефон</p>
                      <a href="tel:+79001234567" className="hover:underline">+7 (900) 123-45-67</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <MapPin size={20} className="mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold">Адрес</p>
                      <p>Москва, Россия</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Рабочие часы</h3>
                <p className="mb-2">Понедельник – Пятница: 9:00 – 18:00</p>
                <p>Выходные: По договоренности</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
