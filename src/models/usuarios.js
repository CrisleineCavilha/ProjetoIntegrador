const {DataTypes} = require('sequelize');
const conexao = require('../database.js');


const Usuario = conexao.define('usuarios',  
{

    idUsuario: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false,        
    },
    permissao: {
        type: DataTypes.INTEGER,           
    },

}, {
    createdAt: false,
    updatedAt: false
});



module.exports = Usuario