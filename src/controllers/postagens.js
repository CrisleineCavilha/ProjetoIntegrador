const servicoPostagens = require('../services/postagens.js');
const servico = new servicoPostagens();

class controllerPostagens {

    async ConsultarUm(req, res) {
        try {
            console.log(req.params.idPostagem);
            const resultPostagens = await servico.ConsultarUm(req.params.idPostagem);
            res.status(200).json({
                postagem: resultPostagens  
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
            const resultPostagens = await servico.ConsultarTodos();
            res.status(200).json({
                postagens: resultPostagens
            })
        } catch(error) {
            console.log(error);
            res.status(500).json({
                message: "Erro ao listar postagens."
            })
        }
    }

    async Create(req, res) {
        try {
            const resultPostagens = await servico.Create(req.body.postagem);
            res.status(201).json({
                postagem: resultPostagens
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
            const result = await servico.Update(req.params.idPostagem, req.body.postagem);
            res.status(200).json({
                message: "Postagem alterada com Sucesso."
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
            await servico.Delete(req.params.idPostagem);
            res.status(200).json({
                message: "Postagem excluída com Sucesso."
            })
        } catch(error) {
            console.log(error);
            res.status(500).json({
                message: "Erro ao deletar Postagem."
            })
        }
    }

} 

module.exports = controllerPostagens