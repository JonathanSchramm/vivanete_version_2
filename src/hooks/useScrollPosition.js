import { useState, useEffect } from 'react';

/**
 * Hook para monitorar a posição de rolagem da página
 * @returns {number} A posição atual do scroll
 */
export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };
    
    window.addEventListener('scroll', updatePosition);
    updatePosition();
    
    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  return scrollPosition;
}; 