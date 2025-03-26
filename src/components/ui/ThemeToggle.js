import React, { useEffect } from 'react';

const ThemeToggle = () => {
  // Forçar modo escuro ao carregar o componente
  useEffect(() => {
    document.documentElement.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
  }, []);

  // Componente vazio, não renderiza nada pois sempre estará no modo escuro
  return null;
};

export default ThemeToggle; 