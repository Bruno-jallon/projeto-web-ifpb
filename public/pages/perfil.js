// Esse código define uma classe "Perfil" utilizando o Sequelize, que é um ORM (Object-relational mapping) para Node.js. Ele está definindo os atributos da classe, como id, nome, sobrenome, telefone, Bairro, CPF, Estado, Cidade e Email, todos com tipos específicos (INTEGER, STRING, etc) e configurações de não nulos. Ele também está importando a conexão com o banco de dados do arquivo "db.js" e exportando essa classe para ser usada em outros arquivos.

const Squelize = require('sequeliz');
const database = require('./db');

// const sequelize = new Sequelize({
//     dialect: 'sqlite',
//     storage: './database.sqlite'
// })

const Perfil = database.define('perfil', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,

    },
    sobrenome: {
        type: Sequelize.STRING,
        allowNull: false,

    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Bairro: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    CPF: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Estado: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Cidade: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
})

module.exports = Perfil;

// module.exports = sequelize;

