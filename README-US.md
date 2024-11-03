Product Registration - Use Case Project

This repository contains a product registration application developed in Node.js with TypeScript, designed to elucidate use case concepts in Software Architecture. The project does not use any third-party backend framework or specific database, opting instead to store data in memory for educational purposes.

## 📚 Summary

- [Overview](#-overview)
- [Project structure](#project-structure)
- [Implemented use cases](#implemented-use-cases)
- [Technologies used](#-technologies-used)
- [Installation and usage](#-installation-and-usage)

  ## 🌎 Overview

The project is a simple product registration system designed to demonstrate the use of use cases in Software Architecture. Each business operation, such as product registration, listing, order creation, and completion, is represented by an isolated use case, allowing for a clearer, more maintainable structure.

The project was also implemented to review domain modeling concepts, as each entity has specific business rules that shape the rich behaviors a software application should offer. Each entity has attributes represented by value objects, which contain data (attributes) and behaviors (methods) that enforce rules to ensure data consistency and clarity for the business context.


## Project structure

The application follows a Clean Architecture-based structure, which in this project has three layers:

* **Outer layer** - User interface, database (repositories), and external dependencies (for example, the bcrypt library was used for user authentication)
* **Core** - The application’s domain layer. It includes entities, value objects, repository interfaces to isolate domain logic from external dependencies, and, most importantly, the use cases
* **Interfaces and adapters** - Creates a bridge between the outer layer and the domain layer to invoke the use cases, using the concept of dependency inversion to avoid tight coupling and make the code more cohesive and easier to maintain

## Use cases implemented

- **User Registration**: Creates a user who will use the system
- **User Login**: User authentication has been implemented to separate operations that should only be performed when the user is logged in
- **Product Registration**: With the user logged in, it will be possible to register new products
- **Cadastro de Produtos**: Com usuário logado, será possível registrar novos produtos
- **Product Listing**: With the user logged in, it will be possible to list saved products and choose whether to add them to the cart before finalizing the order
- **Add Item to Cart**: As mentioned above, with the product listing, the user can opt to place orders by adding items to the cart
- **Finalize Order**: The user will be able to finalize orders that are open

The functionalities are organized into independent modules to illustrate the application of Clean Architecture principles without reliance on external frameworks.

## 🔧 Technologies used

- [Node.js](https://nodejs.org/) 
- [TypeScript](https://www.typescriptlang.org/) 

## 🚩 Installation and usage 

1. Clone the repository:

   ```bash
   git clone https://github.com/VictorMello1993/apoc-use-cases-products.git
   ```
2. Execute the project:
   ```bash  
   npm start
   ```

## README versions
![us](https://user-images.githubusercontent.com/35710766/220503018-6f583dda-2ffc-4f62-afb2-ce0a982ef781.png) [English](https://github.com/VictorMello1993/apoc-use-cases-products/edit/master/README-US.md) 

![br](https://user-images.githubusercontent.com/35710766/220492966-9ed5198a-d9a3-40e2-9d23-e977f4abf253.png) [Portuguese](https://github.com/VictorMello1993/apoc-use-cases-products/edit/master/README.md)
