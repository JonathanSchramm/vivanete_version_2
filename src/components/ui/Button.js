import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/**
 * Componente Button reutilizável
 * 
 * @param {Object} props - Propriedades do componente
 * @param {string} props.variant - Variante visual do botão (primary, secondary, outline, text)
 * @param {string} props.size - Tamanho do botão (sm, md, lg)
 * @param {string} props.className - Classes CSS adicionais
 * @param {boolean} props.fullWidth - Se o botão deve ocupar 100% da largura
 * @param {boolean} props.disabled - Se o botão está desabilitado
 * @param {string} props.to - Link interno (usa React Router)
 * @param {string} props.href - Link externo
 */
const Button = ({
  children,
  variant,
  size,
  className,
  fullWidth,
  disabled,
  type,
  to,
  href,
  onClick,
  ...props
}) => {
  // Classes CSS do botão
  const buttonClass = `
    button 
    button--${variant} 
    button--${size}
    ${fullWidth ? 'button--full-width' : ''}
    ${className || ''}
  `.trim();
  
  // Se tiver uma propriedade 'to', renderiza como Link do React Router
  if (to) {
    return (
      <Link
        to={to}
        className={buttonClass}
        onClick={onClick}
        {...props}
      >
        {children}
      </Link>
    );
  }
  
  // Se tiver uma propriedade 'href', renderiza como <a>
  if (href) {
    return (
      <a
        href={href}
        className={buttonClass}
        onClick={onClick}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  }
  
  // Caso contrário, renderiza como <button>
  return (
    <button
      type={type}
      className={buttonClass}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'text']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  to: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func
};

Button.defaultProps = {
  variant: 'primary',
  size: 'md',
  className: '',
  fullWidth: false,
  disabled: false,
  type: 'button',
  onClick: () => {}
};

export default Button; 