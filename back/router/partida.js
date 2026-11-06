import express from "express"
import ControllerPartida from "../Controller/partida.js"

const router = express.Router()

router.get('/buscar', ControllerPartida.Buscar)
router.get('/detalhe', ControllerPartida.Detalhe)
router.post('/criar', ControllerPartida.Criar)
router.put('/alterar', ControllerPartida.Alterar)
router.delete('/deletar', ControllerPartida.Deletar)

export default router