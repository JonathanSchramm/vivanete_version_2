import React from 'react';
import { Link } from 'react-router-dom';
import Container from './Container';
import Logo from '../common/Logo';
import { FaFacebook, FaInstagram, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__top">
          <div className="footer__brand">
            <Logo className="footer__logo" variant="white" />
            <p className="footer__tagline">Internet e tecnologia para você viver conectado.</p>
          </div>
          
          <div className="footer__links">
            <div className="footer__links-column">
              <h4 className="footer__links-title">Empresa</h4>
              <ul className="footer__links-list">
                <li><Link to="/" onClick={() => window.scrollTo(0, 0)}>Início</Link></li>
                <li><Link to="/planos" onClick={() => window.scrollTo(0, 0)}>Planos</Link></li>
                <li><Link to="/contato" onClick={() => window.scrollTo(0, 0)}>Contato</Link></li>
                <li><Link to="/privacidade" onClick={() => window.scrollTo(0, 0)}>Política de Privacidade</Link></li>
              </ul>
            </div>
            
            <div className="footer__links-column">
              <h4 className="footer__links-title">Contato</h4>
              <div className="footer__contact-info">
                <p>
                  <FaPhone className="footer__contact-icon" /> 
                  <a href="tel:+554930602020">(49) 3060-2020</a>
                </p>
                <p>
                  <FaWhatsapp className="footer__contact-icon" /> 
                  <a href="https://api.whatsapp.com/send?phone=5549999236326">(49) 9 9923-6326</a>
                </p>
                <p>
                  <FaEnvelope className="footer__contact-icon" /> 
                  <a href="mailto:vivanetetelecom@gmail.com">vivanetetelecom@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
          
          <div className="footer__social-container">
            <h4 className="footer__contact-title">Redes Sociais</h4>
            <div className="footer__social">
              <a href="https://www.facebook.com/vivanetCDA" target="_blank" rel="noopener noreferrer" className="footer__social-link footer__social-link--facebook">
                <FaFacebook className="footer__social-icon" />
              </a>
              <a href="https://www.instagram.com/vivanete/" target="_blank" rel="noopener noreferrer" className="footer__social-link footer__social-link--instagram">
                <FaInstagram className="footer__social-icon" />
              </a>
              <a href="https://api.whatsapp.com/send?phone=554930602020&text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20planos%20" target="_blank" rel="noopener noreferrer" className="footer__social-link footer__social-link--whatsapp">
                <FaWhatsapp className="footer__social-icon" />
              </a>
            </div>
          </div>
        </div>
      </Container>
      
      <div className="footer__bottom">
        <Container>
          <div className="footer__bottom-content">
            <p className="footer__copyright">
              &copy; {new Date().getFullYear()} Vivanete - Todos os direitos reservados
            </p>
            <div className="footer__legal">
              <Link to="/privacidade">Política de Privacidade</Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer; 