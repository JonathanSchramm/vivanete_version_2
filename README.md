# Vivanet - Site de Provedor de Internet

Este é o site da Vivanet, um provedor de internet fictício, desenvolvido com React.

## Tecnologias Utilizadas

- React
- React Router
- SASS (SCSS)
- CSS Modular

## Estrutura do Projeto

O projeto segue uma arquitetura de componentes organizada:

- `src/components/common`: Componentes comuns e reutilizáveis
- `src/components/layout`: Componentes de layout (Header, Footer, Container, etc.)
- `src/components/ui`: Componentes de interface do usuário (Button, PlanCard, etc.)
- `src/hooks`: Custom hooks para lógica reutilizável
- `src/pages`: Páginas da aplicação
- `src/styles`: Arquivos SCSS organizados por escopo

## Como executar o projeto

1. Clone o repositório
2. Instale as dependências:
   ```
   npm install
   ```
3. Execute o projeto em modo de desenvolvimento:
   ```
   npm start
   ```
4. Acesse http://localhost:3000 no navegador

## Como fazer o deploy

Para fazer o deploy da aplicação:

1. Gere o build de produção:
   ```
   npm run build
   ```
2. O resultado estará na pasta `build`, pronto para ser enviado para o servidor

## Funcionalidades

- Página inicial com seção de planos
- Header responsivo com menu mobile
- Footer com informações de contato
- Componentes reutilizáveis
- Estilização modular com SCSS 