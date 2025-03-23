/**
 * Funções para interação com a API
 * 
 * Em um ambiente de produção, estas funções fariam
 * requisições HTTP para um servidor back-end.
 * 
 * Por enquanto, estamos usando dados mockados para desenvolvimento.
 */

// Simula um atraso de rede para operações assíncronas
const MOCK_DELAY = 500;

/**
 * Busca a lista de planos de internet
 * @returns {Promise<Array>} Lista de planos
 */
export const getPlans = async () => {
  // Simula um atraso de rede
  await new Promise(resolve => setTimeout(resolve, MOCK_DELAY));
  
  // Dados mockados
  return [
    {
      id: 'plano-basico',
      title: 'Básico',
      price: '89,90',
      description: 'Ideal para uso básico da internet',
      features: [
        'Velocidade de 100 Mbps',
        'Wi-Fi Gratuito',
        'Instalação Grátis',
        'Suporte 24/7'
      ],
      featured: false,
      actionText: 'Assinar Agora'
    },
    {
      id: 'plano-familia',
      title: 'Família',
      price: '129,90',
      description: 'Perfeito para famílias e home office',
      features: [
        'Velocidade de 300 Mbps',
        'Wi-Fi de Alta Performance',
        'Instalação Grátis',
        'Suporte Prioritário 24/7',
        '1 Linha Telefônica Grátis'
      ],
      featured: true,
      actionText: 'Assinar Agora'
    },
    {
      id: 'plano-premium',
      title: 'Premium',
      price: '199,90',
      description: 'Máximo desempenho para gamers e profissionais',
      features: [
        'Velocidade de 600 Mbps',
        'Wi-Fi Mesh (Cobertura Total)',
        'IP Fixo',
        'Suporte VIP 24/7',
        '2 Linhas Telefônicas Grátis'
      ],
      featured: false,
      actionText: 'Assinar Agora'
    }
  ];
}; 