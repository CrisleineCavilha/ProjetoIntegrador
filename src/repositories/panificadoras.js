const Panificadora = require('../models/panificadoras.js');
const Postagem = require('../models/postagens.js');
const Usuario = require('../models/usuarios.js');
const bcrypt = require('bcrypt')

class repositorioPanificadoras {
    

    async ConsultarUmPorEmail(email) {
        return Usuario.findOne({
            where: { email }
        });
    }


    async ConsultarUm(idPanificadora, transaction) {
        return Panificadora.findOne({
            where: { idPanificadora }, 
            include: [Postagem],
            include: [Usuario]
        },
        {transaction}
        );
    }

    async ConsultarTodos() {
        return Panificadora.findAll({
            include: [Usuario]
        });
    }

    async Create(panificadora, transaction) {
        const { dataValues: resultUsuario } = await Usuario.create({
            email: panificadora.email,
            senha: await bcrypt.hash(panificadora.senha, 10)
        }, {transaction});

        const { dataValues: resultPanificadora} = await Panificadora.create(
            { usuarioId: resultUsuario.idUsuario, nome: panificadora.nome, telefone: panificadora.telefone, cnpj: panificadora.cnpj },
            {transaction}
        )             
        return {...resultPanificadora, ...resultUsuario };
    }

   
    async Update(idPanificadora, panificadora) {
        await Panificadora.update(panificadora, {
            where: {
                idPanificadora
            }
        })
        return Panificadora.findOne({
            where: { idPanificadora }
        })
    }

    
    async Delete(idPanificadora) {
        return Panificadora.destroy({
            where: { idPanificadora }
        });       
    }   
        
}

module.exports = repositorioPanificadoras