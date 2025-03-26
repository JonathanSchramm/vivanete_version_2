
# Vivanete

## Sobre o Projeto

O Vivanete é um site moderno para um provedor de internet que oferece planos de banda larga de alta velocidade. A plataforma foi desenvolvida com foco em performance, experiência do usuário e design responsivo.

## Tecnologias Utilizadas

- React.js
- React Router
- SCSS/Sass para estilos
- Context API para gerenciamento de estado

## Características

- Design moderno com tema escuro personalizado
- Interface responsiva adaptável a diferentes dispositivos
- Carregamento assíncrono e otimizado de componentes
- Sistema de carrossel interativo para destaque de conteúdo
- Exibição de planos de internet com informações detalhadas
- Integração com WhatsApp para contato direto

## Estrutura do Projeto

```
src/
├── assets/        # Imagens e recursos estáticos
├── components/    # Componentes reutilizáveis
│   ├── common/    # Componentes básicos (Logo, OptimizedImage)
│   ├── layout/    # Componentes de estrutura (Header, Footer)
│   └── ui/        # Componentes de interface (Buttons, Cards)
├── contexts/      # Contextos para gerenciamento de estado
├── hooks/         # Hooks personalizados (usePlans)
├── pages/         # Páginas principais
├── styles/        # Arquivos SCSS
│   ├── base/      # Estilos base (variáveis, reset, tipografia)
│   ├── components/# Estilos específicos para componentes
│   └── pages/     # Estilos específicos para páginas
└── utils/         # Utilitários e funções auxiliares
```

## Otimizações de Performance

O projeto implementa diversas técnicas de otimização para melhorar a performance e experiência do usuário:

### Code-Splitting e Lazy Loading
- Utiliza `React.lazy` e `Suspense` para carregar componentes de página sob demanda
- Implementa um sistema de loading durante o carregamento dos componentes

### Redução de Re-renderizações
- Componentes otimizados com `React.memo`
- Uso de `useCallback` para estabilizar referências de funções
- Utilização de `useMemo` para memoização de valores calculados

### Gerenciamento de Estado Eficiente
- Context API com `useReducer` para gerenciamento centralizado
- Ações memoizadas para evitar recriações desnecessárias

### Otimização de Recursos
- Carregamento otimizado de fontes com `preconnect` e carregamento assíncrono
- Componente `OptimizedImage` para gerenciamento eficiente de imagens
- Lazy loading nativo para imagens não críticas
- Priorização de carregamento para conteúdo de primeira tela

### Caching de Dados
- Sistema de cache para dados de planos
- Atualização condicional baseada em tempo para reduzir requisições

## Instalação e Uso

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/vivanete.git

# Entre no diretório
cd vivanete

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm start

# Para criar uma build de produção
npm run build
```

## Ambiente de Desenvolvimento

### Requisitos
- Node.js 14.x ou superior
- npm 6.x ou superior

### Scripts Disponíveis
- `npm start`: Inicia o servidor de desenvolvimento
- `npm test`: Executa os testes
- `npm run build`: Cria uma build otimizada para produção

## Padronização de Código

O projeto segue as melhores práticas de desenvolvimento React:

- Componentes funcionais com hooks
- Separação clara de responsabilidades
- Nomenclatura BEM para classes CSS
- Padrão de design responsivo mobile-first

## Personalização do Tema

A interface utiliza o tema escuro como padrão, com cores baseadas na paleta:
- Cor principal: rgb(1, 84, 80)
- Variações de cor para diferentes elementos da interface
- Sistema de variáveis CSS para fácil personalização

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para detalhes.
