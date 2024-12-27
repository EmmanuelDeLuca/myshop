# MyShop. 🏪💻

O **MyShop** é um projeto de e-commerce desenvolvido para praticar e consolidar estudos em **React**, **TypeScript**, **Styled Components**, e conceitos de gerenciamento de estado com **Redux** e **Redux Toolkit**, além de consumir APIs externas para simular uma loja virtual funcional. A aplicação consome a API pública [Fake Store API](https://fakestoreapi.com/) para exibir produtos e criar uma experiência completa de navegação e compra.

## Objetivo do Projeto

O objetivo principal deste projeto é:
- Praticar a criação de aplicações modernas utilizando **React** e **TypeScript**.
- Estilizar interfaces dinâmicas com **Styled Components**.
- Gerenciar o estado global da aplicação com **Redux** e **Redux Toolkit**.
- Trabalhar com o consumo de uma API para integrar dados reais no projeto.
- Implementar funcionalidades de e-commerce, como:
  - Exibição de produtos.
  - Adição e remoção de produtos no carrinho de compras.
  - Cálculo do valor total dos itens no carrinho.

## Funcionalidades

1. **Exibição de Produtos**:
   - Mostra todos os produtos da [Fake Store API](https://fakestoreapi.com/products), exibindo informações como:
     - Nome do produto.
     - Imagem ilustrativa.
     - Preço.
     - Avaliação.

2. **Carrinho de Compras**:
   - Permite adicionar produtos ao carrinho clicando no card do produto desejado.
   - Gerencia o estado do carrinho utilizando **Redux Toolkit**.
   - Exibe uma lista de todos os produtos adicionados, mostrando o nome e o preço de cada um.
   - Oferece a possibilidade de remover produtos do carrinho:
     - Pelo botão de remover abaixo do produto no carrinho.
     - Diretamente no card do produto.

3. **Cálculo do Valor Total**:
   - Exibe o valor total da compra com base nos produtos adicionados ao carrinho.

4. **Estilização Customizada**:
   - Utiliza **Styled Components** para criar estilos dinâmicos, modulares e reutilizáveis.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para criação de interfaces de usuário.
- **TypeScript**: Superset de JavaScript que adiciona tipos estáticos ao código.
- **Styled Components**: Biblioteca para estilização de componentes React utilizando CSS-in-JS.
- **Redux**: Biblioteca para gerenciamento de estado global.
- **Redux Toolkit**: Ferramenta oficial da equipe Redux que facilita o uso e implementação de Redux.
- **Fake Store API**: Fonte de dados para simulação de um e-commerce.

## Como Rodar Localmente
1. **Clone o repositório:**

   ```bash
   git clone https://github.com/EmmanuelDeLuca/myshop.git
   
2. **Acessando o diretorio do projeto:**
Navegue até o diretório do projeto
    ```bash
   cd myshop 

3. **Instale as dependências:**
 Execute o seguinte comando para instalar as dependências:
   ```bash
   yarn install 


4. **Rodando o aplicativo:**
Após instalar as dependências, rode o seguinte comando para iniciar o servidor de desenvolvimento:
   ```bash
   yarn start 

5. **Acesse o projeto:**

   ```bash
   http://localhost:3000

