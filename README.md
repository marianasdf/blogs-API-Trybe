
# Projeto Blogs API! 

Nesse projeto, o objetivo era desenvolver um **CRUD** (Create, Read, Update e Delete) de posts  (com o Sequelize).  Desenvolvendo alguns endpoints (seguindo os princípios do REST) que estarão conectados ao banco de dados.


Desafios:
- Criar e associar tabelas usando models do sequelize
- Construir endpoints para consumir os models que criar
- Fazer um CRUD com o ORM



# Ferramentas usadas 🧰

 🔨 Este projeto foi feito com Node.js utilizando o pacote Sequelize e JavaScript.
 
---

### INSTRUÇÕES :

1. Clone o repositório
  * `git clone git@github.com:marianasdf/blogs-API-Trybe.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd sd-014-b-project-blogs-api`

2. Instale as dependências
  * `npm install`
 
3. Crie, na raíz do projeto, um arquivo `.env` contendo as seguintes variáveis:

```
  host: process.env.MYSQL_HOST
  user: process.env.MYSQL_USER
  password: process.env.MYSQL_PASSWORD
  
```
4. Conexão com o banco de dados 

A conexão do banco deverá conter os seguintes parâmetros:

```module.exports = {
  development: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'blogs_api',
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
  test: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'blogs_api',
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
  production: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'blogs_api',
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
};
```
**:warning: É essencial configurar essas 3 variáveis de ambiente para testar o projeto localmente: :warning:**

```
  host: process.env.MYSQL_HOST
  user: process.env.MYSQL_USER
  password: process.env.MYSQL_PASSWORD
```

5. Inicie o projeto
  * `npm start `
  * `npm run dev` caso queria rodar o projeto através do nodemon
  
6. Acesse as rotas através de softwares como Postman e Insomnia através do endereço:
  * `http://localhost:3000`
---

7. referências 

 - Este README foi criado baseado neste repositório da Luana Moneró https://github.com/luanamonero/crud-api-products/blob/main/README.md

 - A pasta `seeders` foi criada pela trybe para inserir as querys no banco de dados.