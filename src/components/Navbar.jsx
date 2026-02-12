import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { en } from '../translations/en';
import { es } from '../translations/es';

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const t = language === 'en' ? en : es;

  const navLinks = [
    { name: t.nav.about, href: '#about' },
    { name: t.nav.experience, href: '#experience' },
    { name: t.nav.projects, href: '#projects' },
    { name: t.nav.skills, href: '#skills' },
    { name: t.nav.education, href: '#education' },
    { name: t.nav.contact, href: '#contact' }
  ];

  const scrollToSection = (href) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md shadow-md z-50 translate-y-0 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="#hero" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
              KE
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200"
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="px-3 py-2 rounded-md text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-1"
            >
              <span>{language === 'en' ? '🇺🇸' : '🇪🇸'}</span>
              <span className="font-bold">{language === 'en' ? 'EN' : 'ES'}</span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors duration-200"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200"
              >
                {link.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
