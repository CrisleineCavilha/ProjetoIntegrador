const { DataTypes } = require('sequelize');
const conexao = require('../database.js');
const Panificadora = require('./panificadoras.js');

const Postagem = conexao.define('postagens', {
    idPostagem: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    horario: {
        type: DataTypes.STRING,
        allowNull: false
    },
    idPanificadora: {
        type: DataTypes.INTEGER,
    },
}, {
    createdAt: false,
    updatedAt: false
});

Postagem.belongsTo(Panificadora, { 
    constraint: true, 
    foreignKey: 'idPanificadora' 
})


Panificadora.hasMany(Postagem, {
    foreignKey: 'idPanificadora'
})

module.exports = Postagem