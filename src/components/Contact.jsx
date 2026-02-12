import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { en } from '../translations/en';
import { es } from '../translations/es';

const Contact = () => {
  const { language } = useLanguage();
  const t = language === 'en' ? en : es;
  const [offset, setOffset] = useState(0);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.2);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError(t.contact.form.validationError);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError(language === 'en' ? 'Please enter a valid email' : 'Por favor ingresa un correo válido');
      return;
    }

    console.log('Form submitted:', formData);

    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const contactInfo = [
    {
      icon: '✉️',
      label: t.contact.info.email,
      value: 'kyleescobedob@gmail.com',
      href: 'mailto:kyleescobedob@gmail.com'
    },
    {
      icon: '📱',
      label: t.contact.info.phone,
      value: '+1 (650) 313-0221',
      href: 'tel:+16503130221'
    },
    {
      icon: '📍',
      label: t.contact.info.location,
      value: 'Menlo Park, CA',
      href: 'https://maps.google.com/?q=Menlo+Park,+CA'
    }
  ];

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Parallax background shapes */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div 
          className="absolute top-40 left-0 w-80 h-80 bg-blue-400 rounded-full"
          style={{ transform: `translateY(${offset * 0.4}px)` }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4 animate-slide-up">{t.contact.title}</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>{t.contact.description}</p>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg border border-gray-200 animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                  {t.contact.form.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={language === 'en' ? 'Enter your name' : 'Ingresa tu nombre'}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-smooth"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                  {t.contact.form.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={language === 'en' ? 'Enter your email' : 'Ingresa tu correo'}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-smooth"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                  {t.contact.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  placeholder={language === 'en' ? 'Type your message here...' : 'Escribe tu mensaje aquí...'}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-smooth resize-none"
                ></textarea>
              </div>

              {error && (
                <div className="p-4 bg-red-100 text-red-700 rounded-lg border border-red-200 animate-fade-in">
                  {error}
                </div>
              )}

              {isSubmitted && (
                <div className="p-4 bg-green-100 text-green-700 rounded-lg border border-green-200 animate-fade-in">
                  {t.contact.form.successMessage}
                </div>
              )}

              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-smooth focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              >
                {t.contact.form.submit}
              </button>
            </form>
          </div>

          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-200 transition-smooth block"
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl mb-2">{info.icon}</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{info.label}</h3>
                    <p className="text-gray-600 hover:text-blue-600 transition-smooth">{info.value}</p>
                  </div>
                </div>
              </a>
            ))}

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-4">
                {language === 'en' ? 'Follow Me' : 'Sígueme'}
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/kyleescobedo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-smooth"
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
                  className="p-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-smooth"
                  title="GitHub"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
