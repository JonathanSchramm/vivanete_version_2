import React from 'react';
import PropTypes from 'prop-types';

/**
 * Componente Container para limitar a largura do conteúdo
 * e centralizar na página
 */
const Container = ({ children, className, fluid, ...props }) => {
  const containerClass = fluid ? 'container-fluid' : 'container';
  
  return (
    <div className={`${containerClass} ${className || ''}`} {...props}>
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  fluid: PropTypes.bool
};

Container.defaultProps = {
  className: '',
  fluid: false
};

export default Container; 