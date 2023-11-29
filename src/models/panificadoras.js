const { DataTypes } = require('sequelize');
const conexao = require('../database.js');
const Usuario = require('../models/usuarios.js');

const Panificadora = conexao.define('panificadoras', {
    idPanificadora: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    cnpj: {
        type: DataTypes.STRING,
        allowNull: false,             
    },
    idUsuario: {
        field: 'idUsuario',
        type: DataTypes.INTEGER,
        references: {
            model: Usuario,
            key: 'idUsuario'
        }
    },
            
}, {
    createdAt: false,
    updatedAt: false
});


Panificadora.belongsTo(Usuario, { 
    constraint: true, 
    foreignKey: 'idUsuario' 
});

module.exports = Panificadora