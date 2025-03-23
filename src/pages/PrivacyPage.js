import React from 'react';
import Container from '../components/layout/Container';

const PrivacyPage = () => {
  return (
    <div className="privacy-page">
      <Container>
        <div className="privacy-page__content">
          <h1 className="privacy-page__title">Política de Privacidade</h1>
          
          <section className="privacy-page__section">
            <h2 className="privacy-page__subtitle">Introdução</h2>
            <p>
              A Vivanete respeita a sua privacidade e está comprometida em proteger seus dados pessoais. 
              Esta política de privacidade visa informar como coletamos, usamos, compartilhamos e 
              protegemos seus dados pessoais quando você utiliza nosso site.
            </p>
          </section>
          
          <section className="privacy-page__section">
            <h2 className="privacy-page__subtitle">Cookies e Tecnologias Semelhantes</h2>
            <p>
              Utilizamos cookies e tecnologias semelhantes para melhorar sua experiência em nosso site. 
              Cookies são pequenos arquivos de texto armazenados em seu dispositivo que nos ajudam a 
              reconhecê-lo e lembrar de suas preferências.
            </p>
            
            <h3 className="privacy-page__subtitle-small">Tipos de Cookies que Utilizamos:</h3>
            <ul className="privacy-page__list">
              <li>
                <strong>Cookies Essenciais:</strong> Necessários para o funcionamento do site. 
                Eles permitem recursos básicos como navegação e acesso a áreas seguras do site.
              </li>
              <li>
                <strong>Cookies de Preferências:</strong> Permitem que o site lembre suas escolhas 
                (como idioma ou região) para fornecer uma experiência mais personalizada.
              </li>
              <li>
                <strong>Cookies Estatísticos:</strong> Ajudam-nos a entender como os visitantes 
                interagem com o site, coletando e relatando informações anonimamente.
              </li>
              <li>
                <strong>Cookies de Marketing:</strong> Utilizados para rastrear visitantes em websites. 
                O objetivo é exibir anúncios relevantes e envolventes para o usuário.
              </li>
            </ul>
          </section>
          
          <section className="privacy-page__section">
            <h2 className="privacy-page__subtitle">Seus Direitos</h2>
            <p>
              Você tem o direito de acessar, corrigir, atualizar ou solicitar a exclusão de seus dados pessoais. 
              Também pode limitar o processamento de suas informações ou solicitar a portabilidade de seus dados.
            </p>
            <p>
              Para exercer seus direitos, entre em contato conosco através dos canais informados abaixo.
            </p>
          </section>
          
          <section className="privacy-page__section">
            <h2 className="privacy-page__subtitle">Contato</h2>
            <p>
              Para dúvidas ou solicitações relacionadas a esta política ou seus dados pessoais, 
              entre em contato com nosso Encarregado de Proteção de Dados:
            </p>
            <p>
              E-mail: vivanetetelecom@gmail.com<br />
              Telefone: (49) 3060-2020
            </p>
          </section>
          
          <section className="privacy-page__section">
            <h2 className="privacy-page__subtitle">Alterações nesta Política</h2>
            <p>
              Podemos atualizar esta política de privacidade periodicamente para refletir mudanças em nossas 
              práticas. Recomendamos que você revise esta página regularmente para estar ciente de eventuais alterações.
            </p>
            <p>
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
};

export default PrivacyPage; 