import React, { useState } from 'react';
import Button from './Button';

/**
 * Componente de formulário de contato
 */
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envio
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Resetar o formulário
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        message: ''
      });
      
      // Resetar status após 5 segundos
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="contact-form">
      <h2 className="contact-form__title">Entre em contato</h2>
      <p className="contact-form__subtitle">Preencha o formulário abaixo para solicitar informações ou agendar uma visita técnica.</p>
      
      {submitted ? (
        <div className="contact-form__success">
          <div className="contact-form__success-icon">✓</div>
          <h3>Mensagem enviada com sucesso!</h3>
          <p>Obrigado pelo seu contato. Retornaremos em breve.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form__form">
          <div className="contact-form__group">
            <label htmlFor="name" className="contact-form__label">Nome completo*</label>
            <input
              type="text"
              id="name"
              name="name"
              className="contact-form__input"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Digite seu nome completo"
            />
          </div>
          
          <div className="contact-form__row">
            <div className="contact-form__group">
              <label htmlFor="email" className="contact-form__label">E-mail*</label>
              <input
                type="email"
                id="email"
                name="email"
                className="contact-form__input"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Digite seu e-mail"
              />
            </div>
            
            <div className="contact-form__group">
              <label htmlFor="phone" className="contact-form__label">Telefone*</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="contact-form__input"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="(00) 00000-0000"
              />
            </div>
          </div>
          
          <div className="contact-form__group">
            <label htmlFor="address" className="contact-form__label">Endereço completo*</label>
            <input
              type="text"
              id="address"
              name="address"
              className="contact-form__input"
              value={formData.address}
              onChange={handleChange}
              required
              placeholder="Digite seu endereço completo"
            />
          </div>
          
          <div className="contact-form__group">
            <label htmlFor="message" className="contact-form__label">Mensagem*</label>
            <textarea
              id="message"
              name="message"
              className="contact-form__textarea"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Digite sua mensagem"
              rows={4}
            />
          </div>
          
          <div className="contact-form__actions">
            <Button
              type="submit"
              variant="primary"
              fullWidth
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
            </Button>
          </div>
        </form>
      )}
      
      <div className="contact-form__info">
        <div className="contact-form__info-item">
          <div className="contact-form__info-icon">✉️</div>
          <div className="contact-form__info-content">
            <h4>E-mail</h4>
            <a href="mailto:vivanetetelecom@gmail.com">vivanetetelecom@gmail.com</a>
          </div>
        </div>
        
        <div className="contact-form__info-item">
          <div className="contact-form__info-icon">📞</div>
          <div className="contact-form__info-content">
            <h4>Telefone</h4>
            <a href="tel:554930602020">(49) 3060-2020</a>
          </div>
        </div>
        
        <div className="contact-form__info-item">
          <div className="contact-form__info-icon">📍</div>
          <div className="contact-form__info-content">
            <h4>Endereço</h4>
            <p>R. Marcílio Dias, 1868 - Sagrado Coração, São Miguel do Oeste - SC</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm; 