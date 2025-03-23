import React from 'react';
import PropTypes from 'prop-types';
import logoImage from '../../assets/images/logo.png';

/**
 * Componente Logo da Vivanete
 */
const Logo = ({ variant, className, ...props }) => {
  const logoClass = `logo logo--${variant} ${className || ''}`;
  
  return (
    <div className={logoClass} {...props}>
      <img src={logoImage} alt="Vivanete" className="logo__image" />
    </div>
  );
};

Logo.propTypes = {
  variant: PropTypes.oneOf(['default', 'white']),
  className: PropTypes.string
};

Logo.defaultProps = {
  variant: 'default',
  className: ''
};

export default Logo; 