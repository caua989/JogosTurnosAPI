import ServicePartida from '../service/partida.js'

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
            const id = req.params.id
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
            const id = req.params.id
            const { descricao, data, vencedor } = req.body

            await ServicePartida.Alterar(id, descricao, data, vencedor)
        
            res.status(200).send({ message: "Partida alterada com sucesso!" })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    async Deletar(req, res) {
        try {
            const id = req.params.id

            await ServicePartida
        .Deletar(id)

            res.status(204).send({ message: "Partida deletada com sucesso!" })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }


}

export default new ControllerPartida()