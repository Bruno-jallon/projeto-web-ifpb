// Esse código está criando um modelo de tabela para um banco de dados relacional chamado "Perfil" usando o Sequelize. Ele define os campos da tabela, como "id", "nome", "sobrenome", "telefone", "bairro", "rua", "cep", "estado", "email", "pais", "login" e "senha", bem como seus tipos de dados e se são permitidos valores nulos ou não. Ele também está exportando essa definição de modelo para ser utilizada em outros arquivos.

const Sequelize = require('sequelize');
const database = require("../db");

const Perfil = database.define('perfil', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    sobrenome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    bairro: {
        type: Sequelize.STRING,
        allowNull: false
    },
    rua: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cep: {
        type: Sequelize.STRING,
        allowNull: false
    },
    estado: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    pais: {
        type: Sequelize.STRING,
        allowNull: false
    },
    login: {
        type: Sequelize.STRING,
        allowNull: false
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Perfil;