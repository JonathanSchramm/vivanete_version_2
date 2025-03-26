import React from 'react';
import PropTypes from 'prop-types';
import logoImage from '../../assets/images/logo.png';
import { useScrollPosition } from '../../hooks/useScrollPosition';

/**
 * Componente Logo da Vivanete
 */
const Logo = ({ className, ...props }) => {
  const scrollPosition = useScrollPosition();
  const isScrolled = scrollPosition > 20;
  
  // Usar variante white quando o header está no topo (transparente)
  const variant = isScrolled ? 'default' : 'white';
  const logoClass = `logo logo--${variant} ${className || ''}`;
  
  return (
    <div className={logoClass} {...props}>
      <img src={logoImage} alt="Vivanete" className="logo__image" />
    </div>
  );
};

Logo.propTypes = {
  className: PropTypes.string
};

Logo.defaultProps = {
  className: ''
};

export default Logo; 