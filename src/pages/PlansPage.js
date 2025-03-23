import React from 'react';
import Container from '../components/layout/Container';
import PlansSection from '../components/ui/PlansSection';

const PlansPage = () => {
  return (
    <div className="plans-page">
      <Container>
        <h1 className="plans-page__title">Nossos Planos de Internet</h1>
        <p className="plans-page__subtitle">
          Conheça os melhores planos de internet para sua casa ou empresa
        </p>
      </Container>
      
      <div className="plans-page__section">
        <PlansSection 
          title="Planos Residenciais"
          subtitle="Internet de alta velocidade para toda sua família"
        />
      </div>
      
      <div className="plans-page__info">
        <Container>
          <div className="plans-page__benefits">
            <h2 className="plans-page__benefits-title">Por que escolher a Vivanete?</h2>
            
            <div className="plans-page__benefits-grid">
              <div className="plans-page__benefit-item">
                <h3>Internet de Alta Velocidade</h3>
                <p>Conexão estável e ultra-rápida para todas as suas atividades online.</p>
              </div>
              
              <div className="plans-page__benefit-item">
                <h3>Suporte Técnico 24/7</h3>
                <p>Equipe especializada pronta para resolver qualquer problema a qualquer hora.</p>
              </div>
              
              <div className="plans-page__benefit-item">
                <h3>Sem Fidelidade</h3>
                <p>Você é livre para escolher quanto tempo deseja ficar com nossos serviços.</p>
              </div>
              
              <div className="plans-page__benefit-item">
                <h3>Instalação Rápida</h3>
                <p>Equipe técnica qualificada para realizar instalações em tempo recorde.</p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default PlansPage; 