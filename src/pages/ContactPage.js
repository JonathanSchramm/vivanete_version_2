import React from 'react';
import Container from '../components/layout/Container';
import ContactForm from '../components/ui/ContactForm';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <Container>
        <h1 className="contact-page__title">Entre em Contato</h1>
        <p className="contact-page__subtitle">
          Estamos prontos para atender você e responder todas as suas dúvidas
        </p>
        
        <div className="contact-page__content">
          <div className="contact-page__form-container">
            <ContactForm />
          </div>
          
          <div className="contact-page__map-container">
            <h3 className="contact-page__map-title">Nosso Endereço</h3>
            <p className="contact-page__address">R. Marcílio Dias, 1868 - Sagrado Coração, São Miguel do Oeste - SC</p>
            <div className="contact-page__map">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.0887326402573!2d-53.52562399084096!3d-26.72534048199752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94fa5b6c0526e1ed%3A0x98dd6f1c4dfc915a!2sR.%20Marc%C3%ADlio%20Dias%2C%201868%20-%20Sagrado%20Cora%C3%A7%C3%A3o%2C%20S%C3%A3o%20Miguel%20do%20Oeste%20-%20SC%2C%2089900-000!5e0!3m2!1spt-BR!2sbr!4v1724275372453!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Vivanete em São Miguel do Oeste"
              ></iframe>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactPage; 