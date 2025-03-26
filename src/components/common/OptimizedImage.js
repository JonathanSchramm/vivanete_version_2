import React, { useState, memo } from 'react';
import PropTypes from 'prop-types';

/**
 * Componente para renderização de imagens otimizadas com lazy loading
 * e carregamento progressivo
 */
const OptimizedImage = ({
  src,
  alt,
  className,
  width,
  height,
  loading = 'lazy',
  fetchPriority = 'auto',
  sizes = '100vw',
  onLoad,
  placeholder,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Classes para efeito de fade-in quando a imagem carrega
  const imageClass = `
    optimized-image 
    ${isLoaded ? 'optimized-image--loaded' : ''} 
    ${className || ''}
  `.trim();
  
  const handleLoad = (e) => {
    setIsLoaded(true);
    if (onLoad) onLoad(e);
  };
  
  return (
    <div 
      className="optimized-image__wrapper"
      style={{ width, height, position: 'relative' }}
    >
      {placeholder && !isLoaded && (
        <div className="optimized-image__placeholder">
          {typeof placeholder === 'string' ? (
            <img src={placeholder} alt="" className="optimized-image__placeholder-img" />
          ) : (
            placeholder
          )}
        </div>
      )}
      
      <img
        src={src}
        alt={alt}
        className={imageClass}
        loading={loading}
        fetchpriority={fetchPriority}
        onLoad={handleLoad}
        sizes={sizes}
        {...props}
      />
    </div>
  );
};

OptimizedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  loading: PropTypes.oneOf(['lazy', 'eager']),
  fetchPriority: PropTypes.oneOf(['auto', 'high', 'low']),
  sizes: PropTypes.string,
  onLoad: PropTypes.func,
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};

export default memo(OptimizedImage); 