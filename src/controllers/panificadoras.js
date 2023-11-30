const servicoPanificadoras = require('../services/panificadoras.js');
const servico = new servicoPanificadoras();
const bcrypt = require('bcrypt') 
const jwt = require('jsonwebtoken'); 
const config = require("../config");


class controllerPanificadoras {


    async Login(req, res) {
        console.log(req.body)
        const { email, senha } = req.body;

        console.log(email,senha)

        if(!email || !senha ){
            return res.status(401).json({ message: "E-mail ou senha inválidoa" });
        }
        console.log(email)
        
        const { dataValues: usuario } = await servico.ConsultarUmPorEmail(email)

        if(!usuario) {
            console.log('erro1')
            return res.status(401).json({ message: "E-mail ou senha inválidob" });
        }

        if(!(await bcrypt.compare(senha, usuario.senha))){
            console.log('erro2')
            return res.status(401).json({ message: "E-mail ou senha inválidoc" });
        }
        console.log(usuario)   

        const token = jwt.sign( 
            
            { idUsuario: usuario.idUsuario, email: usuario.email},
            config.secret 
        )

        res.json({ token })             
    }


    async ConsultarUm(req, res) {
        try {
            console.log(req.session.permissao)
            const result = await servico.ConsultarUm(req.params.idPanificadora);
            res.status(200).json({
                Panificadora: result     
            })
        } catch(error) {
            console.log(error);
            res.status(500).json({
                message: error.message
            })
        }
    }


    async ConsultarTodos(req, res) {
        try {
            console.log(req.session.permissao)
            const resultPanificadora = await servico.ConsultarTodos();
            res.status(200).json({
                clientes: resultPanificadora
            })
        } catch(error) {
            console.log(error);
            res.status(500).json({
                message: error.message
            })
        }
    }

    async Create(req, res) {
        try {
            
            const resultPanificadora = await servico.Create(req.body.panificadora);
            res.status(201).json({
                message: { resultPanificadora }
            })
        } catch(error) {
            console.log(error);
            res.status(500).json({
                message: error.message
            })
        }
    }

    async Update(req, res) {
        try {
            const resultPanificadora = await servico.Update(req.params.idPanificadora, req.body.panificadora);
            res.status(200).json({
                message: resultPanificadora
            })
        } catch(error) {
            console.log(error);
            res.status(500).json({
                message: error.message
            })
        }
    }

    async Delete(req, res) {
        try {
            servico.Delete(req.params.idPanificadora);
            res.status(200).json({
                message: "Cadastro excluído com Sucesso."
            })
        } catch(error) {
            console.log(error);
            res.status(500).json({
                message: "Erro ao deletar cadastro da Panificadora."
            })
        }
    }
} 

module.exports = controllerPanificadoras