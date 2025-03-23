import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

/**
 * Componente de cartão de plano
 */
const PlanCard = ({ plan, className }) => {
  const {
    id,
    title,
    price,
    description,
    features,
    featured,
    actionText
  } = plan;
  
  const cardClass = `
    plan-card 
    ${featured ? 'plan-card--featured' : ''} 
    ${className || ''}
  `.trim();
  
  // Link do WhatsApp incluindo o nome do plano
  const whatsappLink = `https://api.whatsapp.com/send?phone=554930602020&text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20plano%20${title}`;
  
  return (
    <div className={cardClass} id={id}>
      {featured && (
        <div className="plan-card__badge">Recomendado</div>
      )}
      
      <div className="plan-card__header">
        <h3 className="plan-card__title">{title}</h3>
        <div className="plan-card__price-container">
          <span className="plan-card__price-currency">R$</span>
          <span className="plan-card__price">{price}</span>
          <span className="plan-card__price-period">/mês</span>
        </div>
        <p className="plan-card__description">{description}</p>
      </div>
      
      <div className="plan-card__content">
        <ul className="plan-card__features">
          {features.map((feature, index) => (
            <li key={index} className="plan-card__feature">
              <span className="plan-card__feature-icon"></span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="plan-card__footer">
        <Button 
          variant={featured ? 'primary' : 'outline'} 
          fullWidth 
          href={whatsappLink}
        >
          {actionText || 'Assinar Agora'}
        </Button>
      </div>
    </div>
  );
};

PlanCard.propTypes = {
  plan: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    description: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.string),
    featured: PropTypes.bool,
    actionText: PropTypes.string
  }).isRequired,
  className: PropTypes.string
};

PlanCard.defaultProps = {
  className: ''
};

export default PlanCard; 