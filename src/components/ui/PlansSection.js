import React from 'react';
import PropTypes from 'prop-types';
import Container from '../layout/Container';
import PlanCard from './PlanCard';
import { usePlans } from '../../hooks/usePlans';

const PlansSection = ({ title, subtitle }) => {
  const { plans, isLoading, error } = usePlans();
  
  if (isLoading) {
    return (
      <section className="plans-section">
        <Container>
          <div className="plans-section__loading">Carregando planos...</div>
        </Container>
      </section>
    );
  }
  
  if (error) {
    return (
      <section className="plans-section">
        <Container>
          <div className="plans-section__error">
            Erro ao carregar os planos. Por favor, tente novamente mais tarde.
          </div>
        </Container>
      </section>
    );
  }
  
  return (
    <section className="plans-section">
      <Container>
        <div className="plans-section__header">
          <h2 className="plans-section__title">{title}</h2>
          {subtitle && (
            <p className="plans-section__subtitle">{subtitle}</p>
          )}
        </div>
        
        <div className="plans-section__grid">
          {plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </Container>
    </section>
  );
};

PlansSection.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};

PlansSection.defaultProps = {
  title: 'Encontre o plano ideal para você',
  subtitle: 'Escolha entre os nossos planos e tenha a melhor experiência de internet'
};

export default PlansSection; 