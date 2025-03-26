import React, { useState, useEffect, useCallback, memo } from 'react';
// import carouselInicial from '../../assets/images/carouselInicial.png';
import carouselInicial2 from '../../assets/images/carouselInicial2.png';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Array de imagens do carrossel - facilmente escalável para adicionar mais imagens
  // Usando useMemo para evitar recriações desnecessárias do array de slides
  const slides = React.useMemo(() => [
    {
      id: 1,
      image: carouselInicial2,
      alt: 'Vivanete - Internet de alta velocidade'
    }
    // {
    //   id: 2,
    //   image: carouselInicial,
    //   alt: 'Vivanete - Planos para família'
    // }
  ], []);
  
  // Automação para passar os slides a cada 5 segundos
  useEffect(() => {
    if (slides.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length]);
  
  // Ir para um slide específico - usando useCallback para memoizar a função
  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
  }, []);
  
  // Ir para o slide anterior - usando useCallback para memoizar a função
  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);
  
  // Ir para o próximo slide - usando useCallback para memoizar a função
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);
  
  return (
    <div className="hero-carousel">
      <div className="hero-carousel__slides">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-carousel__slide ${index === currentSlide ? 'hero-carousel__slide--active' : ''}`}
          >
            <img 
              src={slide.image} 
              alt={slide.alt} 
              className="hero-carousel__image"
              loading="eager" // Carrega a imagem do slide principal imediatamente
              fetchpriority="high" // Indica alta prioridade para o carregamento
            />
          </div>
        ))}
      </div>
      
      {/* Mostrar controles de navegação apenas se houver mais de um slide */}
      {slides.length > 1 && (
        <>
          <button onClick={prevSlide} className="hero-carousel__nav hero-carousel__nav--prev" aria-label="Slide anterior">
            &#10094;
          </button>
          <button onClick={nextSlide} className="hero-carousel__nav hero-carousel__nav--next" aria-label="Próximo slide">
            &#10095;
          </button>
          
          <div className="hero-carousel__indicators">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`hero-carousel__indicator ${index === currentSlide ? 'hero-carousel__indicator--active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

// Usado React.memo para evitar re-renderizações desnecessárias do componente
export default memo(HeroCarousel); 