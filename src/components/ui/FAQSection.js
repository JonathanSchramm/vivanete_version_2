import React, { useState } from 'react';
import Container from '../layout/Container';

const FAQSection = () => {
  // Estado para controlar qual item está expandido
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Lista de perguntas e respostas
  const faqItems = [
    {
      question: "O que é internet fibra óptica?",
      answer: "A internet fibra óptica utiliza cabos de fibra de vidro para transmitir dados através de pulsos de luz, oferecendo velocidades muito superiores às tecnologias tradicionais como cabo coaxial ou ADSL."
    },
    {
      question: "Quanto tempo leva para instalar?",
      answer: "Após a confirmação da viabilidade técnica, nosso prazo médio de instalação é de 3 a 5 dias úteis."
    },
    {
      question: "Como funciona o suporte técnico?",
      answer: "Nosso suporte técnico está disponível 24 horas por dia, 7 dias por semana, através de WhatsApp, telefone e e-mail."
    },
    {
      question: "A internet tem franquia de dados?",
      answer: "Não, todos os nossos planos são sem franquia de dados, permitindo uso ilimitado."
    }
  ];

  // Função para alternar a expansão do item
  const toggleItem = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <section className="faq-section">
      <Container>
        <h2 className="faq-section__title">Perguntas Frequentes</h2>
        
        <div className="faq-section__content">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className={`faq-item ${expandedIndex === index ? 'faq-item--expanded' : ''}`}
            >
              <div 
                className="faq-item__question"
                onClick={() => toggleItem(index)}
              >
                <h3>{item.question}</h3>
                <span className="faq-item__icon">
                  {expandedIndex === index ? '−' : '+'}
                </span>
              </div>
              
              <div className="faq-item__answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FAQSection; 