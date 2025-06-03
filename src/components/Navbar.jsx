import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={`fixed w-full z-50 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold">Mira Maged</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="#home" className="hover:text-blue-500">
                {language === 'en' ? 'Home' : 'الرئيسية'}
              </a>
              <a href="#experience" className="hover:text-blue-500">
                {language === 'en' ? 'Experience' : 'الخبرات'}
              </a>
              <a href="#projects" className="hover:text-blue-500">
                {language === 'en' ? 'Projects' : 'المشاريع'}
              </a>
              <a href="#contact" className="hover:text-blue-500">
                {language === 'en' ? 'Contact' : 'تواصل'}
              </a>
              
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                {theme === 'dark' ? '🌞' : '🌙'}
              </button>
              
              <button
                onClick={toggleLanguage}
                className="px-3 py-1 rounded border hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                {language === 'en' ? 'عربي' : 'EN'}
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
            <a href="#home" className="block px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
              {language === 'en' ? 'Home' : 'الرئيسية'}
            </a>
            <a href="#experience" className="block px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
              {language === 'en' ? 'Experience' : 'الخبرات'}
            </a>
            <a href="#projects" className="block px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
              {language === 'en' ? 'Projects' : 'المشاريع'}
            </a>
            <a href="#contact" className="block px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
              {language === 'en' ? 'Contact' : 'تواصل'}
            </a>
            <div className="flex space-x-2 px-3 py-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                {theme === 'dark' ? '🌞' : '🌙'}
              </button>
              <button
                onClick={toggleLanguage}
                className="px-3 py-1 rounded border hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                {language === 'en' ? 'عربي' : 'EN'}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;