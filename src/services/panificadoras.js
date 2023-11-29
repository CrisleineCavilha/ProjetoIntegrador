const repositorioPanificadoras = require('../repositories/panificadoras.js');
const repositorio = new repositorioPanificadoras();

class servicoPanificadoras {

    VerificarPanificadora(panificadora) {
        if(!panificadora){
            throw new Error('Não foi enviado uma panificadora para cadastrar.');
        } else if(!panificadora.nome){
            throw new Error('Não foi enviado o nome da Panificadora');
        } else if(!panificadora.telefone){
            throw new Error('Não foi enviado o número de telefone da Panificadora');
        } else if(!panificadora.cnpj){
            throw new Error('Não foi enviado o CNPJ da Panificadora');
        } 
        return true;
    }


    async ConsultarUmPorEmail(email) {
        return repositorio.ConsultarUmPorEmail(email);
    }
 

    async ConsultarUm(idPanificadora, transaction) {
        if(isNaN(idPanificadora)) {
            throw new Error("Favor informar o ID apenas com número.");
        } else if (!idPanificadora) {
            throw new Error('Não foi enviado o identificador da Panificadora para consultar.');
        }
        return repositorio.ConsultarUm(idPanificadora, transaction);
    }


    async ConsultarTodos() {
        return repositorio.ConsultarTodos();
    }


    async Create(panificadora) {
        return repositorio.Create(panificadora);
    }


    async Update(idPanificadora, panificadora) {
        if(!idPanificadora) {
            throw new Error('Não foi enviado o identificador da Panificadora para alterar.');
        }
        this.VerificarPanificadora(panificadora);
        return repositorio.Update(idPanificadora, panificadora);
    }



    async Delete(idPanificadora) {
        return repositorio.Delete(idPanificadora);
    }
}



module.exports = servicoPanificadoras