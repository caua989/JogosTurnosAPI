import ServiceGame from '../service/game.js'

/*
class ControllerPartida {

    async Buscar(req, res) {
        try {
            const partidas = await ServicePartida
        .Buscar()

            res.status(200).send({ partidas })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    async Detalhe(req, res) {
        try {
            // session === usuario logado
            const id = req.session.id
            const partida = await ServicePartida
        .Detalhe(id)

            res.status(200).send({ partida })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    async Criar(req, res) {
        try {
            const { descricao, data, vencedor } = req.body

            await ServicePartida
        .Criar(descricao, data, vencedor)

            res.status(201).send({ message: "Partida criada com sucesso!" })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    async Alterar(req, res) {
        try {
            const id = req.session.id
            const { descricao, data, vencedor } = req.body

            await ServicePartida
        .Alterar(id, descricao, data, vencedor)
        
            res.status(200).send({ message: "Partida alterada com sucesso!" })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    async Deletar(req, res) {
        try {
            const id = req.session.id

            await ServicePartida
        .Deletar(id)

            res.status(204).send({ message: "Partida deletada com sucesso!" })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }


}

export default new ControllerPartida()
*/

class ControllerGame {
    
    async Atacar(req, res) {
        const resultado = ServiceGame.Atacar()
        res.send(resultado)
    }

     async Defender(req, res) {
        try {

        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

     async Curar(req, res) {
        try {

        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    async Status(req, res) {
        try {

        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    async resultado(req, res) {
        try {

        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }
}

export default new ControllerGame()