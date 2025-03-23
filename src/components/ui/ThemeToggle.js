import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Verificar preferência do usuário ao carregar o componente
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark-mode');
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    }
    
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button 
      className={`theme-toggle ${isDarkMode ? 'theme-toggle--dark' : 'theme-toggle--light'}`}
      onClick={toggleTheme}
      aria-label={isDarkMode ? 'Ativar modo claro' : 'Ativar modo escuro'}
      title={isDarkMode ? 'Ativar modo claro' : 'Ativar modo escuro'}
    >
      {isDarkMode ? (
        <span className="theme-toggle__icon">☀️</span>
      ) : (
        <span className="theme-toggle__icon">🌙</span>
      )}
    </button>
  );
};

export default ThemeToggle; 