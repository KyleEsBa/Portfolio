import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { en } from '../translations/en';
import { es } from '../translations/es';

const Skills = () => {
  const { language } = useLanguage();
  const t = language === 'en' ? en : es;
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.25);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skillCategories = [
    {
      title: t.skills.languages,
      skills: ['Java', 'Python', 'JavaScript', 'SQL']
    },
    {
      title: t.skills.frontend,
      skills: ['React', 'Redux', 'HTML', 'Tailwind CSS', 'CSS3']
    },
    {
      title: t.skills.backend,
      skills: ['Node.js', 'Express.js', 'Java Spring Boot']
    },
    {
      title: t.skills.databases,
      skills: ['MongoDB', 'Oracle DB', 'PostgreSQL', 'MySQL', 'SQL Server']
    },
    {
      title: t.skills.devops,
      skills: ['AWS (EC2, ECS, ECR)', 'Docker', 'Jenkins', 'CI/CD', 'GitLab CI/CD']
    },
    {
      title: t.skills.testing,
      skills: ['Jest', 'Selenium', 'Playwright', 'Appium', 'JUnit', 'TestNG', 'Pytest', 'JDBC', 'REST Assured']
    },
    {
      title: t.skills.tools,
      skills: ['Git', 'GitHub', 'GitLab', 'Postman', 'Splunk', 'DevTools', 'VS Code']
    },
    {
      title: t.skills.ai,
      skills: ['OpenAI GPT-4', 'Claude API', 'GitHub Copilot', 'Prompt Engineering']
    }
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Parallax background shapes */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div 
          className="absolute -bottom-40 right-20 w-96 h-96 bg-blue-400 rounded-full"
          style={{ transform: `translateY(${offset * 0.3}px)` }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4 animate-slide-up">{t.skills.title}</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg border border-gray-200 hover:border-blue-200 transition-smooth animate-fade-in"
              style={{ 
                animationDelay: `${index * 0.05}s`,
                transform: `translateY(${offset * 0.06 * (index % 2 === 0 ? 1 : -1)}px)`
              }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="w-1 h-8 bg-blue-600 rounded-full"></span>
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-blue-50 text-gray-900 text-sm font-medium rounded-full border border-blue-100 hover:border-blue-300 hover:bg-blue-100 transition-smooth cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-sm p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            {language === 'en' ? 'Ready to Collaborate' : 'Listo para Colaborar'}
          </h3>
          <p className="text-blue-100 text-lg">
            {language === 'en'
              ? 'I bring a diverse skill set with 6+ years of experience in developing scalable solutions, building automation frameworks, and leading technical initiatives across multiple projects.'
              : 'Aporto un conjunto diverso de habilidades con 6+ años de experiencia desarrollando soluciones escalables, construyendo frameworks de automatización y liderando iniciativas técnicas en múltiples proyectos.'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
