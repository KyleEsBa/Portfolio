import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { en } from '../translations/en';
import { es } from '../translations/es';

const Hero = () => {
  const { language } = useLanguage();
  const t = language === 'en' ? en : es;
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.5);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 to-blue-700">
      {/* Parallax Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute top-10 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"
          style={{ transform: `translateY(${offset * 0.3}px)` }}
        />
        <div 
          className="absolute bottom-10 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl"
          style={{ transform: `translateY(${offset * 0.5}px)` }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white mb-4 animate-slide-up" style={{ letterSpacing: '-0.02em' }}>
          {t.hero.name}
        </h1>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-blue-100 mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          {t.hero.title}
        </h2>

        <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl mx-auto animate-slide-up leading-relaxed" style={{ animationDelay: '0.2s' }}>
          {t.hero.subtitle}
        </p>

        <p className="text-blue-150 mb-8 flex items-center justify-center gap-2 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          {t.hero.location}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <button
            onClick={() => scrollToSection('#projects')}
            className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-smooth shadow-sm"
          >
            {t.hero.cta1}
          </button>
          <button
            onClick={() => scrollToSection('#contact')}
            className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-400 transition-smooth"
          >
            {t.hero.cta2}
          </button>
        </div>

        <div className="flex justify-center gap-6 animate-slide-up" style={{ animationDelay: '0.5s' }}>
          <a
            href="https://www.linkedin.com/in/kyleescobedo"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-smooth backdrop-blur-sm"
            title="LinkedIn"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          <a
            href="https://github.com/kyleesba"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-smooth backdrop-blur-sm"
            title="GitHub"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="mailto:kyleescobedob@gmail.com"
            className="p-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-smooth backdrop-blur-sm"
            title="Email"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
