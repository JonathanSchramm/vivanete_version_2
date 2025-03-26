import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../common/Logo';
import Navigation from './Navigation';
import MobileMenu from './MobileMenu';
import Button from '../ui/Button';
import Container from './Container';
import { useScrollPosition } from '../../hooks/useScrollPosition';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollPosition = useScrollPosition();
  
  // Adiciona classe quando o usuário rola a página
  const isScrolled = scrollPosition > 20;

  // Força modo escuro ao carregar
  useEffect(() => {
    document.documentElement.classList.add('dark-mode');
  }, []);

  // Fecha o menu móvel quando a tela é redimensionada para desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [mobileMenuOpen]);

  // Impede o scroll do body quando o menu móvel está aberto
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <Container>
        <div className="header__inner">
          <Link to="/" className="header__logo-link">
            <Logo />
          </Link>
          
          <Navigation 
            isMobileMenuOpen={mobileMenuOpen} 
            closeMobileMenu={() => setMobileMenuOpen(false)}
          />
          
          <div className="header__actions">
            <Button 
              variant="outline" 
              size="sm"
              href="https://central.vivainternet.hubsoft.com.br/"
              className="header__client-button"
            >
              Área do Cliente
            </Button>
            
            <MobileMenu 
              isOpen={mobileMenuOpen} 
              toggleMenu={toggleMobileMenu} 
            />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header; 