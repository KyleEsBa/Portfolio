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

  const skillLogos = {
    'Java': <svg className="w-4 h-4" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#007396" d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.967 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969z"/><path fill="#007396" d="M44.629 84.455s-5.354 3.994 2.833 4.859c11.407 1.06 20.412 1.03 36.052-1.407 0 0 1.985 2.054 5.117 3.081-31.9 9.33-67.6 1.936-44.002-6.533z"/><path fill="#E76F00" d="M69.266 56.5c6.025 6.945-1.581 13.165-1.581 13.165s15.289-7.893 8.269-17.777c-6.559-9.215-11.587-13.792 15.051-29.503 0-6.088.81-14.697-20.675 14.115z"/><path fill="#007396" d="M102.762 108.22s3.553 2.92-3.903 5.17-26.314 4.299-34.657.472c-3.387-1.857 2.97-4.45 4.979-4.998 2.122-.589 3.333-.474 3.333-.474-3.851-2.7-24.9 5.33-10.684 7.63 39.331 6.369 71.748-2.745 40.932-8.4z"/></svg>,
    'Python': <svg className="w-4 h-4" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#3776ab" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.155-10.823 2.3-12.822 7.013-12.822 15.7v11.6h25.6v3.85H29.461c-8.285 0-15.534 4.97-17.8 14.4-2.823 11.023-2.95 17.9 0 29.5 1.987 7.99 6.844 14.4 15.129 14.4h8.99v-13.4c0-8.197 7.077-15.4 15.429-15.4h25.413c7.987 0 14.322-6.461 14.322-14.313V17.393c0-7.595-6.216-13.377-14.322-15.367-5.505-1.137-11.05-1.883-15.879-1.638zm-5.634 5.517c2.833 0 5.155 2.36 5.155 5.297 0 2.934-2.322 5.24-5.155 5.24-2.834 0-5.156-2.306-5.156-5.24.001-2.937 2.322-5.297 5.156-5.297z"/><path fill="#ffd43b" d="M112.214 45.52c-8.285 0-15.535 4.97-17.8 14.4v13.4c0 8.197-7.076 15.4-15.428 15.4H53.572c-7.987 0-14.322 6.461-14.322 14.312v25.093c0 7.595 6.217 13.377 14.322 15.367 11.3 2.327 22.073.6 28.4-3.51 3.49-2.3 5.743-5.943 5.743-9.757V96.57h-25.6v-3.85h41.029c8.285 0 12.462-5.573 14.322-14.4 2.071-9.254 1.986-17.9 0-29.5-1.987-7.99-6.844-14.4-15.129-14.4zm-24.6 65.617c2.833 0 5.156 2.307 5.156 5.24 0 2.937-2.323 5.297-5.156 5.297-2.834 0-5.155-2.36-5.155-5.297 0-2.933 2.321-5.24 5.155-5.24z"/></svg>,
    'JavaScript': <svg className="w-4 h-4" viewBox="0 0 128 128" fill="#f1e05a" xmlns="http://www.w3.org/2000/svg"><rect x="14" y="14" width="100" height="100" rx="6" fill="#323330"/><path fill="#f1e05a" d="M84.471 53.11s-4.747-3.272-10.252-3.272c-5.938 0-9.463 2.822-9.463 7.429 0 5.153 3.342 6.805 8.993 8.804 8.417 3.008 13.989 5.153 13.989 13.989 0 11.436-8.993 15.273-18.937 15.273-8.341 0-13.265-3.342-15.809-7.353l8.341-5.382c1.886 3.342 4.325 5.835 8.804 5.835 3.871 0 6.343-1.886 6.343-6.194 0-4.325-2.748-5.611-7.353-7.353-7.582-2.748-14.198-5.496-14.198-14.723 0-10.252 7.657-15.961 16.41-15.961 7.124 0 11.436 2.519 13.493 5.382l-7.962 5.612zm-32.064 0s-4.747-3.272-10.252-3.272c-5.938 0-9.463 2.822-9.463 7.429 0 5.153 3.342 6.805 8.993 8.804 8.417 3.008 13.989 5.153 13.989 13.989 0 11.436-8.993 15.273-18.937 15.273-8.341 0-13.265-3.342-15.809-7.353l8.341-5.382c1.886 3.342 4.325 5.835 8.804 5.835 3.871 0 6.343-1.886 6.343-6.194 0-4.325-2.748-5.611-7.353-7.353-7.582-2.748-14.198-5.496-14.198-14.723 0-10.252 7.657-15.961 16.41-15.961 7.124 0 11.436 2.519 13.493 5.382l-7.962 5.612z"/></svg>,
    'SQL': <svg className="w-4 h-4" viewBox="0 0 128 128" fill="#336791" xmlns="http://www.w3.org/2000/svg"><path d="M.5 64c0 35.3 28.7 64 64 64s64-28.7 64-64S99.3 0 64 0 .5 28.7.5 64z"/></svg>,
    'React': <svg className="w-4 h-4" viewBox="0 0 128 128" fill="#61dafb" xmlns="http://www.w3.org/2000/svg"><circle cx="64" cy="64" r="11.4" fill="#61dafb"/><path fill="none" stroke="#61dafb" strokeWidth="3" d="M64 76.4c-6.8 0-12.4-5.6-12.4-12.4S57.2 51.6 64 51.6s12.4 5.6 12.4 12.4-5.6 12.4-12.4 12.4m51.1-13.4c4.1-7.1 6.3-15.1 6.3-22.8 0-25.9-21-47-47-47S27 15.3 27 41.2c0 7.7 2.2 15.7 6.3 22.8M27 87.2c-4.1 7.1-6.3 15.1-6.3 22.8 0 25.9 21 47 47 47s47-21 47-47c0-7.7-2.2-15.7-6.3-22.8"/></svg>,
    'Redux': <svg className="w-4 h-4" viewBox="0 0 128 128" fill="#764abc" xmlns="http://www.w3.org/2000/svg"><path d="M64 64m-60 0a60 60 0 1 1 120 0a60 60 0 1 1 -120 0" fill="#764abc" opacity="0.1"/><path d="M95 59c6.627 0 12 5.373 12 12s-5.373 12-12 12-12-5.373-12-12 5.373-12 12-12m0-6c-9.941 0-18 8.059-18 18s8.059 18 18 18 18-8.059 18-18-8.059-18-18-18z" fill="#764abc"/></svg>,
    'HTML': <svg className="w-4 h-4" viewBox="0 0 128 128" fill="#e34c26" xmlns="http://www.w3.org/2000/svg"><polygon points="64,12 28,109 100,109"/><polygon fill="#fff" points="64,20 90,100 64,100"/></svg>,
    'Tailwind CSS': <svg className="w-4 h-4" viewBox="0 0 128 128" fill="#38bdf8" xmlns="http://www.w3.org/2000/svg"><path d="M64 12c-28.7 0-52 23.3-52 52s23.3 52 52 52 52-23.3 52-52-23.3-52-52-52z" fill="#38bdf8"/></svg>,
    'CSS3': <svg className="w-4 h-4" viewBox="0 0 128 128" fill="#264bdc" xmlns="http://www.w3.org/2000/svg"><polygon points="64,12 28,109 100,109"/><polygon fill="#fff" points="64,20 90,100 64,100"/></svg>,
    'Node.js': <svg className="w-4 h-4" viewBox="0 0 128 128" fill="#68a063" xmlns="http://www.w3.org/2000/svg"><path d="M64 12c28.7 0 52 23.3 52 52s-23.3 52-52 52S12 92.7 12 64 35.3 12 64 12z" fill="#68a063" opacity="0.1"/><circle cx="64" cy="64" r="20" fill="#68a063"/></svg>,
    'Express.js': <svg className="w-4 h-4" viewBox="0 0 128 128" fill="#000" xmlns="http://www.w3.org/2000/svg"><path d="M64 12c28.7 0 52 23.3 52 52s-23.3 52-52 52S12 92.7 12 64 35.3 12 64 12z"/></svg>,
    'Java Spring Boot': <svg className="w-4 h-4" viewBox="0 0 128 128" fill="#6db33f" xmlns="http://www.w3.org/2000/svg"><path d="M64 12c28.7 0 52 23.3 52 52s-23.3 52-52 52S12 92.7 12 64 35.3 12 64 12z" fill="#6db33f"/></svg>,
    'MongoDB': <svg className="w-4 h-4" viewBox="0 0 128 128" fill="#13aa52" xmlns="http://www.w3.org/2000/svg"><path d="M64 12c28.7 0 52 23.3 52 52s-23.3 52-52 52S12 92.7 12 64 35.3 12 64 12z" fill="#13aa52"/></svg>,
    'Oracle DB': <svg className="w-4 h-4" viewBox="0 0 128 128" fill="#f80000" xmlns="http://www.w3.org/2000/svg"><path d="M64 12c28.7 0 52 23.3 52 52s-23.3 52-52 52S12 92.7 12 64 35.3 12 64 12z" fill="#f80000"/></svg>,
    'PostgreSQL': <svg className="w-4 h-4" viewBox="0 0 128 128" fill="#336791" xmlns="http://www.w3.org/2000/svg"><path d="M64 12c28.7 0 52 23.3 52 52s-23.3 52-52 52S12 92.7 12 64 35.3 12 64 12z" fill="#336791"/></svg>,
    'MySQL': <svg className="w-4 h-4" viewBox="0 0 128 128" fill="#00758f" xmlns="http://www.w3.org/2000/svg"><path d="M64 12c28.7 0 52 23.3 52 52s-23.3 52-52 52S12 92.7 12 64 35.3 12 64 12z" fill="#00758f"/></svg>,
    'SQL Server': <svg className="w-4 h-4" viewBox="0 0 128 128" fill="#cc2927" xmlns="http://www.w3.org/2000/svg"><path d="M64 12c28.7 0 52 23.3 52 52s-23.3 52-52 52S12 92.7 12 64 35.3 12 64 12z" fill="#cc2927"/></svg>,
    'AWS (EC2, ECS, ECR)': <svg className="w-4 h-4" viewBox="0 0 128 128" fill="#ff9900" xmlns="http://www.w3.org/2000/svg"><path d="M64 12c28.7 0 52 23.3 52 52s-23.3 52-52 52S12 92.7 12 64 35.3 12 64 12z" fill="#ff9900"/></svg>,
    'Docker': <svg className="w-4 h-4" viewBox="0 0 128 128" fill="#2496ed" xmlns="http://www.w3.org/2000/svg"><path d="M64 12c28.7 0 52 23.3 52 52s-23.3 52-52 52S12 92.7 12 64 35.3 12 64 12z" fill="#2496ed"/></svg>,
    'Jenkins': <svg className="w-4 h-4" viewBox="0 0 128 128" fill="#d33c3c" xmlns="http://www.w3.org/2000/svg"><path d="M64 12c28.7 0 52 23.3 52 52s-23.3 52-52 52S12 92.7 12 64 35.3 12 64 12z" fill="#d33c3c"/></svg>,
    'CI/CD': <svg className="w-4 h-4" viewBox="0 0 128 128" fill="#3498db" xmlns="http://www.w3.org/2000/svg"><path d="M64 12c28.7 0 52 23.3 52 52s-23.3 52-52 52S12 92.7 12 64 35.3 12 64 12z" fill="#3498db"/></svg>,
    'GitLab CI/CD': <svg className="w-4 h-4" viewBox="0 0 128 128" fill="#fc6d26" xmlns="http://www.w3.org/2000/svg"><path d="M64 12c28.7 0 52 23.3 52 52s-23.3 52-52 52S12 92.7 12 64 35.3 12 64 12z" fill="#fc6d26"/></svg>,
    'Jest': <svg className="w-4 h-4" viewBox="0 0 128 128" fill="#c63864" xmlns="http://www.w3.org/2000/svg"><path d="M64 12c28.7 0 52 23.3 52 52s-23.3 52-52 52S12 92.7 12 64 35.3 12 64 12z" fill="#c63864"/></svg>,
    'Selenium': <svg className="w-4 h-4" viewBox="0 0 128 128" fill="#059e41" xmlns="http://www.w3.org/2000/svg"><path d="M64 12c28.7 0 52 23.3 52 52s-23.3 52-52 52S12 92.7 12 64 35.3 12 64 12z" fill="#059e41"/></svg>,
    'Playwright': <svg className="w-4 h-4" viewBox="0 0 128 128" fill="#00d4ff" xmlns="http://www.w3.org/2000/svg"><path d="M64 12c28.7 0 52 23.3 52 52s-23.3 52-52 52S12 92.7 12 64 35.3 12 64 12z" fill="#00d4ff"/></svg>,
    'Appium': <svg className="w-4 h-4" viewBox="0 0 128 128" fill="#662d91" xmlns="http://www.w3.org/2000/svg"><path d="M64 12c28.7 0 52 23.3 52 52s-23.3 52-52 52S12 92.7 12 64 35.3 12 64 12z" fill="#662d91"/></svg>,
    'JUnit': <svg className="w-4 h-4" viewBox="0 0 128 128" fill="#ce3262" xmlns="http://www.w3.org/2000/svg"><path d="M64 12c28.7 0 52 23.3 52 52s-23.3 52-52 52S12 92.7 12 64 35.3 12 64 12z" fill="#ce3262"/></svg>,
    'TestNG': <svg className="w-4 h-4" viewBox="0 0 128 128" fill="#ff9933" xmlns="http://www.w3.org/2000/svg"><path d="M64 12c28.7 0 52 23.3 52 52s-23.3 52-52 52S12 92.7 12 64 35.3 12 64 12z" fill="#ff9933"/></svg>,
    'Pytest': <svg className="w-4 h-4" viewBox="0 0 128 128" fill="#0a9aef" xmlns="http://www.w3.org/2000/svg"><path d="M64 12c28.7 0 52 23.3 52 52s-23.3 52-52 52S12 92.7 12 64 35.3 12 64 12z" fill="#0a9aef"/></svg>,
    'JDBC': <svg className="w-4 h-4" viewBox="0 0 128 128" fill="#007396" xmlns="http://www.w3.org/2000/svg"><path d="M64 12c28.7 0 52 23.3 52 52s-23.3 52-52 52S12 92.7 12 64 35.3 12 64 12z" fill="#007396"/></svg>,
    'REST Assured': <svg className="w-4 h-4" viewBox="0 0 128 128" fill="#4285f4" xmlns="http://www.w3.org/2000/svg"><path d="M64 12c28.7 0 52 23.3 52 52s-23.3 52-52 52S12 92.7 12 64 35.3 12 64 12z" fill="#4285f4"/></svg>,
    'Git': <svg className="w-4 h-4" viewBox="0 0 128 128" fill="#f1502f" xmlns="http://www.w3.org/2000/svg"><path d="M64 12c28.7 0 52 23.3 52 52s-23.3 52-52 52S12 92.7 12 64 35.3 12 64 12z" fill="#f1502f"/></svg>,
    'GitHub': <svg className="w-4 h-4" viewBox="0 0 128 128" fill="#000" xmlns="http://www.w3.org/2000/svg"><path d="M64 12c28.7 0 52 23.3 52 52s-23.3 52-52 52S12 92.7 12 64 35.3 12 64 12z" fill="#000"/></svg>,
    'GitLab': <svg className="w-4 h-4" viewBox="0 0 128 128" fill="#fc6d26" xmlns="http://www.w3.org/2000/svg"><path d="M64 12c28.7 0 52 23.3 52 52s-23.3 52-52 52S12 92.7 12 64 35.3 12 64 12z" fill="#fc6d26"/></svg>,
    'Postman': <svg className="w-4 h-4" viewBox="0 0 128 128" fill="#ff6c37" xmlns="http://www.w3.org/2000/svg"><path d="M64 12c28.7 0 52 23.3 52 52s-23.3 52-52 52S12 92.7 12 64 35.3 12 64 12z" fill="#ff6c37"/></svg>,
    'Splunk': <svg className="w-4 h-4" viewBox="0 0 128 128" fill="#000" xmlns="http://www.w3.org/2000/svg"><path d="M64 12c28.7 0 52 23.3 52 52s-23.3 52-52 52S12 92.7 12 64 35.3 12 64 12z" fill="#000"/></svg>,
    'DevTools': <svg className="w-4 h-4" viewBox="0 0 128 128" fill="#0066cc" xmlns="http://www.w3.org/2000/svg"><path d="M64 12c28.7 0 52 23.3 52 52s-23.3 52-52 52S12 92.7 12 64 35.3 12 64 12z" fill="#0066cc"/></svg>,
    'VS Code': <svg className="w-4 h-4" viewBox="0 0 128 128" fill="#0078d4" xmlns="http://www.w3.org/2000/svg"><path d="M64 12c28.7 0 52 23.3 52 52s-23.3 52-52 52S12 92.7 12 64 35.3 12 64 12z" fill="#0078d4"/></svg>,
    'OpenAI GPT-4': <svg className="w-4 h-4" viewBox="0 0 128 128" fill="#10a37f" xmlns="http://www.w3.org/2000/svg"><path d="M64 12c28.7 0 52 23.3 52 52s-23.3 52-52 52S12 92.7 12 64 35.3 12 64 12z" fill="#10a37f"/></svg>,
    'Claude API': <svg className="w-4 h-4" viewBox="0 0 128 128" fill="#8b5cf6" xmlns="http://www.w3.org/2000/svg"><path d="M64 12c28.7 0 52 23.3 52 52s-23.3 52-52 52S12 92.7 12 64 35.3 12 64 12z" fill="#8b5cf6"/></svg>,
    'GitHub Copilot': <svg className="w-4 h-4" viewBox="0 0 128 128" fill="#1f6feb" xmlns="http://www.w3.org/2000/svg"><path d="M64 12c28.7 0 52 23.3 52 52s-23.3 52-52 52S12 92.7 12 64 35.3 12 64 12z" fill="#1f6feb"/></svg>,
    'Prompt Engineering': <svg className="w-4 h-4" viewBox="0 0 128 128" fill="#4f46e5" xmlns="http://www.w3.org/2000/svg"><path d="M64 12c28.7 0 52 23.3 52 52s-23.3 52-52 52S12 92.7 12 64 35.3 12 64 12z" fill="#4f46e5"/></svg>
  };

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
                    className="px-3 py-2 bg-blue-50 text-gray-900 text-sm font-medium rounded-full border border-blue-100 hover:border-blue-300 hover:bg-blue-100 transition-smooth cursor-default flex items-center gap-2"
                  >
                    <span className="flex-shrink-0">{skillLogos[skill] || '✨'}</span>
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
