import { useState, useEffect } from 'react';

/**
 * Hook para buscar e gerenciar os dados dos planos
 * 
 * @param {Object} options - Opções de configuração
 * @param {boolean} options.autoFetch - Se os planos devem ser buscados automaticamente
 * @returns {Object} Objeto contendo os planos e estados de carregamento
 */
export const usePlans = ({ autoFetch = true } = {}) => {
  const [plans, setPlans] = useState([]);
  const [isLoading, setIsLoading] = useState(autoFetch);
  const [error, setError] = useState(null);

  const fetchPlans = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      // Em um ambiente real, chamaríamos a API
      // const data = await getPlans();
      
      // Para desenvolvimento, usamos dados mockados
      const data = [
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
      
      setPlans(data);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (autoFetch) {
      fetchPlans();
    }
  }, [autoFetch]);

  return {
    plans,
    isLoading,
    error,
    fetchPlans,
    setPlans
  };
}; 