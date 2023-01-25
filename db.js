// Este código está importando a biblioteca Sequelize e criando uma nova instância dela. O Sequelize é um ORM (Object-Relational Mapping) para Node.js que permite trabalhar com bancos de dados relacionais usando um modelo de objetos.

// A primeira linha "const Sequelize = require('sequelize');" está importando a biblioteca Sequelize para ser usada no código.

// A segunda linha "const sequelize = new Sequelize({dialect: 'sqlite', storage: './database.sqlite'})" está criando uma nova instância do Sequelize e passando algumas configurações para ela.

const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
})

module.exports = sequelize;

// O parâmetro "dialect" está especificando qual tipo de banco de dados será usado. No caso, é o sqlite.
// O parâmetro "storage" está especificando o caminho do arquivo que será usado para armazenar o banco de dados SQLite.
// Por fim, "module.exports = sequelize" está exportando a instância do Sequelize criada para que possa ser usada em outros arquivos da aplicação.

// Essa instância do Sequelize pode ser usada para criar e gerenciar tabelas e registros no banco de dados SQLite, definir relacionamentos entre tabelas, validar dados de entrada, entre outras funcionalidades.
