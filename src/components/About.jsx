import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { en } from '../translations/en';
import { es } from '../translations/es';

const About = () => {
  const { language } = useLanguage();
  const t = language === 'en' ? en : es;
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.3);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    'Java',
    'Python',
    'JavaScript',
    'React',
    'Node.js',
    'SQL',
    'AWS',
    'Docker',
    'Git',
    'Selenium',
    'Playwright',
    'Testing'
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Parallax background shapes */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div 
          className="absolute -top-40 -right-40 w-96 h-96 bg-blue-400 rounded-full"
          style={{ transform: `translateY(${offset}px)` }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4 animate-slide-up">{t.about.title}</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {t.about.description}
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t.about.education}</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-blue-50 border border-blue-100">
                  <svg className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 font-medium">Master's in Computer Science - {language === 'en' ? 'Peru' : 'Perú'}</span>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-blue-50 border border-blue-100">
                  <svg className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 font-medium">Bachelor's in Computer Engineering - {language === 'en' ? 'Peru' : 'Perú'}</span>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-blue-50 border border-blue-100">
                  <svg className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 font-medium">Full Stack Development with Generative AI - Purdue University (In Progress)</span>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t.about.languages}</h3>
              <div className="flex gap-4 flex-wrap">
                <span className="px-4 py-2 bg-blue-600 text-white rounded-full font-medium transition-smooth shadow-sm">{t.about.english}</span>
                <span className="px-4 py-2 bg-blue-600 text-white rounded-full font-medium transition-smooth shadow-sm">{t.about.spanish}</span>
              </div>
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="mb-8 flex justify-center">
              <div className="w-64 h-64 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-sm flex items-center justify-center text-white text-6xl font-bold">
                KE
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t.about.expertise}</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-50 text-gray-800 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-700 transition-smooth border border-gray-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
