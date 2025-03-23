import React, { useState, useEffect } from 'react';
import Button from './Button';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Verificar se o usuário já aceitou os cookies
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    
    // Se não aceitou, mostrar o banner após 1 segundo
    if (!cookiesAccepted) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);
  
  // Aceitar todos os cookies
  const acceptAllCookies = () => {
    localStorage.setItem('cookiesAccepted', 'all');
    localStorage.setItem('cookiesAcceptedDate', new Date().toISOString());
    setIsVisible(false);
  };
  
  // Aceitar apenas cookies essenciais
  const acceptEssentialCookies = () => {
    localStorage.setItem('cookiesAccepted', 'essential');
    localStorage.setItem('cookiesAcceptedDate', new Date().toISOString());
    setIsVisible(false);
  };
  
  if (!isVisible) return null;
  
  return (
    <div className="cookie-banner">
      <div className="cookie-banner__container">
        <div className="cookie-banner__content">
          <h3 className="cookie-banner__title">Utilizamos cookies</h3>
          <p className="cookie-banner__text">
            Nós utilizamos cookies para melhorar sua experiência em nosso site, personalizar conteúdo 
            e anúncios, fornecer recursos de mídia social e analisar nosso tráfego. Ao clicar em "Aceitar todos", 
            você concorda com o uso de cookies para esses fins, conforme nossa{' '}
            <a href="/privacidade" className="cookie-banner__link">Política de Privacidade</a>.
          </p>
        </div>
        
        <div className="cookie-banner__actions">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={acceptEssentialCookies}
            className="cookie-banner__button"
          >
            Aceitar Essenciais
          </Button>
          
          <Button 
            variant="primary" 
            size="sm" 
            onClick={acceptAllCookies}
            className="cookie-banner__button"
          >
            Aceitar Todos
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner; 