import React from 'react';
import Container from '../components/layout/Container';
import PlansSection from '../components/ui/PlansSection';
import HeroCarousel from '../components/ui/HeroCarousel';
import VantagensSection from '../components/ui/VantagensSection';
import FAQSection from '../components/ui/FAQSection';

const HomePage = () => {
  return (
    <div className="home-page">
      <section className="home-page__hero">
        <HeroCarousel />
      </section>
      
      <section className="home-page__welcome">
        <Container>
          <h1 className="home-page__title">Internet de alta velocidade para sua casa e negócio</h1>
          <p className="home-page__subtitle">
            Navegue sem limitações com os melhores planos de internet da região
          </p>
        </Container>
      </section>
      
      <PlansSection />
      
      <VantagensSection />
      
      <FAQSection />
      
      {/* Aqui você pode adicionar mais seções da página inicial */}
    </div>
  );
};

export default HomePage; 