import React from 'react';
import Container from '../layout/Container';

const VantagensSection = () => {
  return (
    <section className="vantagens-section">
      <Container>
        <h2 className="vantagens-section__title">Por que escolher a Vivanete?</h2>
        
        <div className="vantagens-section__grid">
          <div className="vantagem-card">
            <div className="vantagem-card__icon">🚀</div>
            <h3 className="vantagem-card__title">Ultra Velocidade</h3>
            <p className="vantagem-card__text">
              Nossa tecnologia de fibra óptica garante a velocidade contratada, mesmo em horários de pico.
            </p>
          </div>
          
          <div className="vantagem-card">
            <div className="vantagem-card__icon">⚡</div>
            <h3 className="vantagem-card__title">Baixa Latência</h3>
            <p className="vantagem-card__text">
              Perfeito para jogos online e videoconferências, sem travamentos ou delays.
            </p>
          </div>
          
          <div className="vantagem-card">
            <div className="vantagem-card__icon">🔒</div>
            <h3 className="vantagem-card__title">Conexão Segura</h3>
            <p className="vantagem-card__text">
              Proteção contra ataques e monitoramento constante da sua rede.
            </p>
          </div>
          
          <div className="vantagem-card">
            <div className="vantagem-card__icon">🛠️</div>
            <h3 className="vantagem-card__title">Suporte Local</h3>
            <p className="vantagem-card__text">
              Equipe técnica na sua cidade, pronta para atender rapidamente qualquer problema.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default VantagensSection; 