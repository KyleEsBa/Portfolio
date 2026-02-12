import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { en } from '../translations/en';
import { es } from '../translations/es';

const Education = () => {
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

  const educationList = [
    {
      school: t.education.purdue.school,
      degree: t.education.purdue.degree,
      status: t.education.purdue.status,
      date: t.education.purdue.date,
      icon: '🎓',
      bgClass: 'from-blue-50 to-blue-100',
      borderClass: 'border-blue-600'
    },
    {
      school: t.education.unmsm.school,
      degree: t.education.unmsm.degree,
      icon: '📚',
      bgClass: 'from-indigo-50 to-indigo-100',
      borderClass: 'border-indigo-600'
    },
    {
      school: t.education.uac.school,
      degree: t.education.uac.degree,
      icon: '🏫',
      bgClass: 'from-purple-50 to-purple-100',
      borderClass: 'border-purple-600'
    }
  ];

  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 relative overflow-hidden">
      {/* Parallax background shapes */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div 
          className="absolute -top-40 right-40 w-80 h-80 bg-blue-400 rounded-full"
          style={{ transform: `translateY(${offset * 0.2}px)` }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4 animate-slide-up">{t.education.title}</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {educationList.map((edu, index) => {
            return (
              <div
                key={index}
                className={`bg-white rounded-lg border border-gray-200 hover:border-blue-200 transition-smooth p-8 animate-fade-in`}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  transform: `translateY(${offset * 0.05 * (index % 2 === 0 ? 1 : -1)}px)`
                }}
              >
                <div className="text-5xl mb-4">{edu.icon}</div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">{edu.school}</h3>

                <p className="text-gray-700 font-semibold mb-3">{edu.degree}</p>

                {edu.date && (
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v2h16V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5H4v8a2 2 0 002 2h12a2 2 0 002-2V7h-2v1a1 1 0 11-2 0V7H7v1a1 1 0 11-2 0V7z" clipRule="evenodd" />
                    </svg>
                    {edu.date}
                  </div>
                )}

                {edu.status && (
                  <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full border border-blue-200">
                    {edu.status}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-blue-50 rounded-lg border border-blue-200 p-8">
          <p className="text-gray-700 text-center text-lg">
            {language === 'en'
              ? 'Currently pursuing advanced education in Full Stack Development with Generative AI at Purdue University while maintaining and advancing my technical expertise through continuous learning and hands-on projects.'
              : 'Actualmente cursando educación avanzada en Desarrollo Full Stack con IA Generativa en la Universidad de Purdue, mientras mantengo y avanzo mi experiencia técnica a través del aprendizaje continuo y proyectos prácticos.'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
