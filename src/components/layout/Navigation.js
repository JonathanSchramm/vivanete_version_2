import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navigation = ({ isMobileMenuOpen, closeMobileMenu }) => {
  const navClass = `navigation ${isMobileMenuOpen ? 'navigation--mobile-open' : ''}`;
  
  return (
    <nav className={navClass}>
      <ul className="navigation__list">
        <li className="navigation__item">
          <NavLink 
            to="/" 
            end
            className={({ isActive }) => 
              `navigation__link ${isActive ? 'navigation__link--active' : ''}`
            }
            onClick={closeMobileMenu}
          >
            Home
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink 
            to="/planos" 
            className={({ isActive }) => 
              `navigation__link ${isActive ? 'navigation__link--active' : ''}`
            }
            onClick={closeMobileMenu}
          >
            Planos
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink 
            to="/sobre" 
            className={({ isActive }) => 
              `navigation__link ${isActive ? 'navigation__link--active' : ''}`
            }
            onClick={closeMobileMenu}
          >
            Sobre
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink 
            to="/contato" 
            className={({ isActive }) => 
              `navigation__link ${isActive ? 'navigation__link--active' : ''}`
            }
            onClick={closeMobileMenu}
          >
            Contato
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  isMobileMenuOpen: PropTypes.bool,
  closeMobileMenu: PropTypes.func
};

Navigation.defaultProps = {
  isMobileMenuOpen: false,
  closeMobileMenu: () => {}
};

export default Navigation; 