const repositorioPostagens = require('../repositories/postagens.js');
const repositorio = new repositorioPostagens();


class servicoPostagens {

    VerificarPostagem(postagem) {
        if(!postagem){
            throw new Error('Não foi enviado um horário para cadastrar.');
        }     
        return true;
    }
    

    async ConsultarUm(idPostagem) {
        if(isNaN(idPostagem)) {
            throw new Error("Favor informar o ID apenas com número.");
        } 
        const resultadoId = repositorio.ConsultarUm(idPostagem)
        console.log(resultadoId)
        if(resultadoId == null) {
            throw new Error("Esse ID não foi encontrado");
        } else {
            return resultadoId;
        }
    }

    async ConsultarTodos() {
        return repositorio.ConsultarTodos();
    }

    async Create(postagem) {
        this.VerificarPostagem(postagem);
        return repositorio.Create(postagem);
    }

    async Update(idPostagem, postagem) {
        if(!idPostagem) {
            throw new Error('Não foi enviado o identificador da Postagem para alterar.');
        }
        this.VerificarPostagem(postagem);
        return repositorio.Update(idPostagem, postagem);
    }

    async Delete(idPostagem) {
        return repositorio.Delete(idPostagem);
    }
}

module.exports = servicoPostagens