import { useState, useEffect, useMemo, useCallback } from 'react';

// Cache em nível de módulo para armazenar os planos e reduzir fetchs repetidos
let plansCache = null;
let lastFetchTime = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutos em milissegundos

/**
 * Hook para buscar e gerenciar os dados dos planos
 * 
 * @param {Object} options - Opções de configuração
 * @param {boolean} options.autoFetch - Se os planos devem ser buscados automaticamente
 * @returns {Object} Objeto contendo os planos e estados de carregamento
 */
export const usePlans = ({ autoFetch = true } = {}) => {
  const [plans, setPlans] = useState([]);
  const [isLoading, setIsLoading] = useState(autoFetch && !plansCache);
  const [error, setError] = useState(null);

  // Usando useCallback para evitar recriações desnecessárias da função fetchPlans
  const fetchPlans = useCallback(async (forceRefresh = false) => {
    // Verificar cache antes de buscar novamente
    const now = Date.now();
    if (!forceRefresh && plansCache && (now - lastFetchTime < CACHE_DURATION)) {
      setPlans(plansCache);
      setIsLoading(false);
      return;
    }
    
    try {
      setIsLoading(true);
      setError(null);
      
      // Em um ambiente real, chamaríamos a API
      // const data = await getPlans();
      
      // Para desenvolvimento, usamos dados mockados
      // Simulando um pequeno atraso para mostrar o estado de carregamento
      await new Promise(resolve => setTimeout(resolve, 300));
      
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
      
      // Atualizar o cache
      plansCache = data;
      lastFetchTime = Date.now();
      
      setPlans(data);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Efeito para buscar planos automaticamente, com respeito ao cache
  useEffect(() => {
    if (autoFetch) {
      fetchPlans();
    }
  }, [autoFetch, fetchPlans]);

  // Usar useMemo para retornar um objeto consistente
  return useMemo(() => ({
    plans,
    isLoading,
    error,
    fetchPlans,
    refreshPlans: () => fetchPlans(true) // Método para forçar atualização ignorando cache
  }), [plans, isLoading, error, fetchPlans]);
}; 