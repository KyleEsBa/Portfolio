import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { en } from '../translations/en';
import { es } from '../translations/es';

const Projects = () => {
  const { language } = useLanguage();
  const t = language === 'en' ? en : es;
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.4);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      id: 1,
      name: t.projects.starbucks.name,
      description: t.projects.starbucks.description,
      tools: t.projects.starbucks.tools,
      image: 'https://cdn.prod.website-files.com/659a9ef71c962485037fcc8f/65ed11b9d9252c7b9cd65ec1_Starbucks-logo.webp',
      demoLink: 'https://kyleesba.github.io/FoodDeliveryApp/',
      githubLink: 'https://github.com/kyleesba/FoodDeliveryApp',
      tags: ['JavaScript', 'HTML', 'Tailwind CSS', 'Local Storage']
    },
    {
      id: 2,
      name: t.projects.hr.name,
      description: t.projects.hr.description,
      tools: t.projects.hr.tools,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIqyfzcP7cTL3H0oPqbN6PwT0eJQ7ohoAeWA&s',
      demoLink: 'https://hr-application-three.vercel.app/',
      githubLink: 'https://github.com/kyleesba/hr-app',
      tags: ['React', 'Redux', 'Vite', 'Context API']
    },
    {
      id: 3,
      name: t.projects.uber.name,
      description: t.projects.uber.description,
      tools: t.projects.uber.tools,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSChoDW_LPBYWG-RJivhDRU7A7p3GdrQHMKyg&s',
      demoLink: 'https://book-taxi-app.vercel.app',
      githubLink: 'https://github.com/kyleesba/uber-app',
      tags: ['React', 'Redux', 'React Router', 'Validation']
    }
  ];

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 relative overflow-hidden">
      {/* Parallax background shapes */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div 
          className="absolute top-20 left-10 w-80 h-80 bg-blue-400 rounded-full"
          style={{ transform: `translateY(${offset * 0.2}px)` }}
        />
        <div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full"
          style={{ transform: `translateY(${-offset * 0.15}px)` }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4 animate-slide-up">{t.projects.title}</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden hover:border-blue-200 transition-smooth group animate-fade-in border border-gray-200"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                transform: `translateY(${offset * 0.05 * (index % 2 === 0 ? 1 : -1)}px)`
              }}
            >
              <div className="w-full h-48 bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.name}
                </h3>

                <p className="text-sm text-blue-600 font-semibold mb-3">{project.tools}</p>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full border border-blue-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-smooth text-center"
                  >
                    {language === 'en' ? 'Live Demo' : 'Demo en Vivo'}
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-gray-800 text-white text-sm font-semibold rounded-lg hover:bg-gray-900 transition-smooth text-center"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
