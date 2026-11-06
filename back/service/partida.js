import RepositoryPartida from '../repository/partida.js'
import bcrypt from 'bcrypt'
//import jwt from 'jsonwebtoken'

const SALT = 12

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

        const cryptPass = await bcrypt.hash(vencedor, SALT)

        await RepositoryPartida.Criar(descricao, data, cryptPass)
    }

    async Alterar(id, descricao, data, vencedor) {
        if(!id || !descricao || !data || !vencedor) {
            throw new Error("Favor informar todos os parametros")
        }
        
        const cryptPass = !vencedor
            ? undefined
            : await bcrypt.hash(vencedor, SALT)

        await RepositoryPartida.Alterar(id, descricao, data, cryptPass)
    }

    async Deletar(id) {
        if(!id) {
            throw new Error("Favor informar o ID")
        }

        await RepositoryPartida.Deletar(id)
    }

}

export default new ServicePartida()