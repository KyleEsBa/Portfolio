import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { en } from '../translations/en';
import { es } from '../translations/es';

const Experience = () => {
  const { language } = useLanguage();
  const t = language === 'en' ? en : es;
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.35);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const experiences = [
    {
      company: t.experience.spectrum.company,
      position: t.experience.spectrum.position,
      location: t.experience.spectrum.location,
      date: t.experience.spectrum.date,
      bullets: t.experience.spectrum.bullets
    },
    {
      company: t.experience.boa.company,
      position: t.experience.boa.position,
      location: t.experience.boa.location,
      date: t.experience.boa.date,
      bullets: t.experience.boa.bullets
    },
    {
      company: t.experience.nexenty.company,
      position: t.experience.nexenty.position,
      location: t.experience.nexenty.location,
      date: t.experience.nexenty.date,
      bullets: t.experience.nexenty.bullets
    }
  ];

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Parallax background shapes */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div 
          className="absolute top-0 left-20 w-96 h-96 bg-blue-400 rounded-full"
          style={{ transform: `translateY(${offset}px)` }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4 animate-slide-up">{t.experience.title}</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-blue-200"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`lg:flex lg:gap-8 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''} animate-slide-up`}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  transform: `translateY(${offset * 0.08 * (index % 2 === 0 ? 1 : -1)}px)`
                }}
              >
                <div className="hidden lg:flex lg:w-1/2 lg:justify-center lg:relative">
                  <div
                    className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-sm absolute top-8 left-1/2 transform -translate-x-1/2"
                  ></div>
                </div>

                <div className="lg:w-1/2">
                  <div className="bg-white p-8 rounded-lg border border-blue-100 hover:border-blue-300 transition-smooth">
                    <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{exp.position}</h3>
                        <p className="text-blue-600 font-semibold text-lg">{exp.company}</p>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {exp.location}
                    </p>

                    <p className="text-gray-600 mb-4 text-sm font-medium">{exp.date}</p>

                    <ul className="space-y-3">
                      {exp.bullets.map((bullet, bulletIndex) => (
                        <li key={bulletIndex} className="flex gap-3">
                          <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
