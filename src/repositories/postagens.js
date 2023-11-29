const Postagem = require('../models/postagens.js');

class repositorioPostagens{
    
    async ConsultarUm(idPostagem) {
        return Postagem.findOne({
            where: {idPostagem},            
        });
    }

    async ConsultarTodos() {
        return Postagem.findAll();
    }


    async Create(postagem) {
        console.log(postagem);
        const result = await Postagem.create(postagem);
        console.log(result);
        return result;
    }
 
    async Update(idPostagem, postagem) {
        const result = await Postagem.update(postagem, {
            where: {idPostagem}
        })
        return result;
    }

    async Delete(idPostagem) {
        return Postagem.destroy({
            where: { idPostagem }
        });
    }        
    
}

module.exports = repositorioPostagens