import RepositoryPartida from '../repository/partida.js'

class ServicePartida {

    async Buscar() {
        return RepositoryPartida.Buscar()
    }

    async Detalhe(id) {
        if(!id) {
            throw new Error("Favor informar o ID")
        }

        return RepositoryPartida.Detalhe(id)
    }

    async Criar(descricao, data, vencedor) {
        if(!descricao || !data || !vencedor) {
            throw new Error("Favor informar todos os parametros")
        }


        await RepositoryPartida.Criar(descricao, data, vencedor)
    }

    async Alterar(id, descricao, data, vencedor) {
        if(!id || !descricao || !data || !vencedor) {
            throw new Error("Favor informar todos os parametros")
        }
        
        await RepositoryPartida.Alterar(id, descricao, data, vencedor)
    }

    async Deletar(id) {
        if(!id) {
            throw new Error("Favor informar o ID")
        }

        await RepositoryPartida.Deletar(id)
    }

}

export default new ServicePartida()