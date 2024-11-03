# Cadastro de Produtos - Projeto de Casos de Uso

Este repositório contém uma aplicação de cadastro de produtos desenvolvida em **Node.js** com **TypeScript**, projetada para elucidar os conceitos de **casos de uso** na Arquitetura de Software. O projeto não utiliza nenhum framework backend de terceiros, nem banco de dados específico, optando por armazenar dados em memória para fins didáticos.

## Índice

- [Visão geral](#visão-geral)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Casos de uso implementados](#casos-de-uso-implementados)
- [Pré-requisitos](#pré-requisitos)
- [Instalação e utilização](#instalação-e-utilização)

## Visão geral

O projeto é um simples cadastro de produto para demonstrar a utilização de **casos de uso** na Arquitetura de Software. Cada operação de negócio, como cadastro de produtos, listagem, criação e finalização de um pedido, é representada por um caso de uso isolado, permitindo uma estrutura mais clara e de fácil manutenção. 

O projeto foi implementado também para revisar os conceitos de modelagem de domínio, visto que cada entidade possui regras de negócio específicas que moldam comportamentos ricos que um software deve se propor a fazer. Percebe-se que cada entidade possui atributos que são representados por objetos de valor, que possui dados (atributos) e comportamentos (métodos) que ditam regras que devem seguir para garantir que os dados passados sejam consistentes e claros para um negócio.  


## Estrutura do projeto

A aplicação segue uma arquitetura baseada na Arquitetura Limpa, que neste projeto possui três camadas:

* **Camada externa** - Interface gráfica, banco de dados (repositories) e dependências externas (exemplo, foi utilizada a biblioteca bcrypt para autenticação do usuário)
* **Core** - Camada de domínio da aplicação. Ela engloba as entidades, objetos de valor, interfaces de repository para isolar a lógica de domínio com as dependências externas, e o mais importante, os casos de uso
* **Interfaces e adaptadores** - Cria uma ponte entre a camada externa e a camada de domínio para chamar os casos de uso, utilizando o conceito de **inversão de dependência** para evitar acoplamento e ter o código mais coeso, e de fácil manutenção 

## Casos de uso implementados

- **Cadastro de usuário**: Cria um usuário que irá usar o sistema
- **Login do usuário**: Foi criada a autenticação do usuário para separar as operações que só devem ser realizadas quando o usuário estiver logado
- **Cadastro de Produtos**: Com usuário logado, será possível registrar novos produtos
- **Listagem de Produtos**: Com usuário logado, será possível listar os produtos salvos e escolher se deseja adicioná-los no carrinho antes de finalizar o pedido
- **Adicionar item ao carrinho**: Conforme dito acima, com a listagem de produtos, o usuário poderá optar por fazer pedidos adicionando itens no carrinho
- **Finalizar pedido**: O usuário poderá finalizar pedidos que estão em aberto

As funcionalidades são organizadas em módulos independentes, de forma a ilustrar a aplicação dos princípios de Arquitetura Limpa sem dependência de frameworks externos.

## Pré-requisitos

- [Node.js](https://nodejs.org/) 
- [TypeScript](https://www.typescriptlang.org/) 

## Instalação e utilização 

1. Clone o repositório:

   ```bash
   git clone https://github.com/VictorMello1993/apoc-use-cases-products.git
   cd apoc-use-cases-products

2. Execute o projeto:
  ```bash
   npm start
 
