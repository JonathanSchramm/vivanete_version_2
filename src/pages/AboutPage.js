import React from 'react';
import Container from '../components/layout/Container';

const AboutPage = () => {
  return (
    <div className="about-page">
      <Container>
        <div className="about-page__content">
          <h1 className="about-page__title">Um Pouco Sobre Nós</h1>
          
          <section className="about-page__section">
            <h2 className="about-page__subtitle">Quem Somos</h2>
            <p>
              Desde a nossa fundação, a Vivanete Telecom tem se destacado no mercado de telecomunicações 
              por oferecer serviços de excelência, eficiência operacional e o mais alto nível de profissionalismo. 
              Nossa trajetória é marcada pelo compromisso incessante em proporcionar soluções inovadoras e 
              personalizadas, atendendo às necessidades específicas de cada cliente.
            </p>
          </section>
          
          <section className="about-page__section">
            <h2 className="about-page__subtitle">Nossa Missão</h2>
            <p>
              Nossa missão é conectar pessoas e empresas por meio de tecnologias de ponta, 
              garantindo qualidade, segurança e confiabilidade em todas as nossas operações. 
              Buscamos incessantemente aprimorar nossos serviços para superar as expectativas 
              de nossos clientes, contribuindo para o seu crescimento e sucesso.
            </p>
          </section>
          
          <section className="about-page__section">
            <h2 className="about-page__subtitle">Nossos Valores</h2>
            <ul className="about-page__list">
              <li><strong>Excelência:</strong> Compromisso com a qualidade em cada serviço prestado.</li>
              <li><strong>Inovação:</strong> Adoção constante de tecnologias avançadas para oferecer soluções modernas.</li>
              <li><strong>Integridade:</strong> Atuação ética e transparente em todas as relações.</li>
              <li><strong>Satisfação do Cliente:</strong> Foco total na experiência e satisfação de nossos clientes.</li>
              <li><strong>Trabalho em Equipe:</strong> Valorização da colaboração e do desenvolvimento profissional de nossa equipe.</li>
            </ul>
          </section>
          
          <section className="about-page__section">
            <h2 className="about-page__subtitle">Nossos Serviços</h2>
            <p>
              Oferecemos uma ampla gama de soluções em telecomunicações, incluindo:
            </p>
            <ul className="about-page__list">
              <li><strong>Conectividade de Alta Velocidade:</strong> Redes de internet rápidas e estáveis para residências e empresas.</li>
              <li><strong>Suporte Técnico 24/7:</strong> Atendimento contínuo para garantir que suas operações nunca parem.</li>
            </ul>
          </section>
          
          <section className="about-page__section">
            <h2 className="about-page__subtitle">Por Que Escolher a Vivanete Telecom?</h2>
            <ul className="about-page__list">
              <li><strong>Experiência Comprovada:</strong> Anos de atuação no mercado, construindo uma reputação sólida.</li>
              <li><strong>Equipe Especializada:</strong> Profissionais altamente capacitados e comprometidos com a excelência.</li>
              <li><strong>Atendimento Personalizado:</strong> Soluções adaptadas às necessidades específicas de cada cliente.</li>
              <li><strong>Tecnologia de Ponta:</strong> Utilização das mais recentes inovações tecnológicas para garantir serviços de qualidade superior.</li>
              <li><strong>Relacionamento de Longo Prazo:</strong> Foco em parcerias duradouras e no sucesso contínuo de nossos clientes.</li>
            </ul>
          </section>
          
          <section className="about-page__section">
            <h2 className="about-page__subtitle">Nosso Compromisso</h2>
            <p>
              Na Vivanete Telecom, acreditamos que a comunicação é a base para o desenvolvimento pessoal e profissional. 
              Por isso, estamos dedicados a facilitar conexões, promover a inovação e melhorar a qualidade de vida 
              de nossos clientes através de serviços de telecomunicações confiáveis e eficientes.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
};

export default AboutPage; 