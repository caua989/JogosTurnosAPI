import campeaoInicial from "../model/game.js"
import monstroInicial from "../model/game.js"
 
/*
    async Buscar() {
        return Partida.findAll()
    }

    async Detalhe(id) {
        return Partida.findByPk(id)
    }

    async BuscarVencedor(vencedor) {
        return Partida.findOne({ where: { vencedor } })
    }

    async Criar( descricao, data, vencedor) {
        await Partida.create({ descricao, data, vencedor })
    }

    async Alterar(id, descricao, data, vencedor) {
        const partida = await Partida.findByPk(id)
        
        if(!partida) {
            throw new Error("Partida não encontrada")
        }

        partida.descricao = descricao || partida.descricao
        partida.data = data || partida.data
        partida.vencedor = vencedor || partida.vencedor

        await partida.save()
    }

    async Deletar(id) {
        const partida = await Partida.findByPk(id)
        
        if(!partida) {
            throw new Error("Partida não encontrada")
        }

        await partida.destroy()
    }
*/

class RepositoryGame {
     async Atacar() {
        r
    }

     async Defender() {
        r
    }

     async Curar() {
        r
    }

    async Status() {
        r
    }

    async Resultado() {
        r
    }

}

export default new RepositoryGame()