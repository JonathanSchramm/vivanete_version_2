import React from 'react';
import PropTypes from 'prop-types';

/**
 * Componente do botão de menu mobile
 */
const MobileMenu = ({ isOpen, toggleMenu }) => {
  const menuClass = `mobile-menu ${isOpen ? 'mobile-menu--open' : ''}`;
  
  return (
    <button
      className={menuClass}
      onClick={toggleMenu}
      aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
      aria-expanded={isOpen}
    >
      <span className="mobile-menu__bar"></span>
      <span className="mobile-menu__bar"></span>
      <span className="mobile-menu__bar"></span>
    </button>
  );
};

MobileMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired
};

export default MobileMenu; 