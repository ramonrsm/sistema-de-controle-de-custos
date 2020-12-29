# Sistema De Controle De Custos

Desenvolvimento de um sistema de controle de custos que auxilie uma empresa a controlar
questões como:

**Cadastro de funcionários e departamentos atuante**  
O usuário tem o poder para cadastrar novos funcionários e em quais departamentos este
funcionário irá trabalhar.

**Cadastro de departamentos**  
O usuário tem o poder para cadastrar os departamentos da empresa.

**Gerenciamento de movimentações**  
O usuário tem o poder de definir as movimentações de cada departamento, ou seja, seus custos.

### Features

- [x] Cadastro de funcionário
- [x] Cadastro de departamentos
- [x] Cadastro de movimentações
- [x] Listagem de movimentações

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone <https://github.com/ramonrsm/sistema-de-controle-de-custos.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd sistema-de-controle-de-custos

# Vá para a pasta backend
$ cd backend

# Renomeei o arquivo .env.txt para .env

# Informe os dados do seu banco de dados, previamente já vem configurado para o uso de mysql e com a biblioteca mysql2 mude caso seja necessário

# A API faz uso do TypeORM no <https://typeorm.io/#/connection-options> você encontrará mais informações sobre as opções de conexão.

# Instale as dependências
$ npm install

# Execute as migrations
$ migration:run

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor inciará na porta:4000 - acesse <http://localhost:4000>
```

### 🎲 Rodando o Front End

```bash
# Acesse a pasta do frontend
$ cd sistema-de-controle-de-custos

# Vá para a pasta backend
$ cd frontend

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm start

# O servidor inciará na porta:3000 - acesse <http://localhost:3000>
```
### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [React](https://pt-br.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TypeORM](https://typeorm.io/)
- [ExpressJS](https://expressjs.com/)
