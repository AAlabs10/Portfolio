// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { href, Link } from 'react-router-dom';

// --- SVG Icons ---
const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-6.364-.386l1.591-1.591M3 12h2.25m.386-6.364l1.591 1.591" />
  </svg>
);
const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
  </svg>
);
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);
const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close mobile menu when window is resized >= md
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

 const navLinks = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
  { title: 'Resume', href: '/resume' },
  { title: 'Portfolio', href: '/portfoilo' },
  { title: 'Contact', href: '/contact' },
];


  return (
    <>
      <header className=" sticky top-0 z-50 w-full shadow-md bg-white dark:bg-gray-800" style={{ padding: '0% 5%' }}>
        <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">AAlabs</h1>

          {/* Desktop Nav + Theme Toggle */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.title}
                  to={link.href}
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  {link.title}
                </Link>
              ))}
            </nav>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <MoonIcon /> : <SunIcon />}
            </button>
          </div>

          {/* Mobile: Toggle + Hamburger */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Theme Toggle always visible on mobile */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <MoonIcon /> : <SunIcon />}
            </button>
            {/* Hamburger Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-white dark:bg-gray-800">
          <div className="pt-20 flex flex-col items-center h-full">
            <nav className="flex flex-col items-center space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.title}
                  to={link.href}
                  className="text-xl text-gray-800 dark:text-gray-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.title}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;