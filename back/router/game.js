import express from "express"
import ControllerGame from "../Controller/game.js"

const router = express.Router()

router.get('/atacar', ControllerGame.Atacar)
router.get('/defender', ControllerGame.Defender)
router.post('/curar', ControllerGame.Curar)
router.put('/status', ControllerGame.Status)
router.put('/resultado', ControllerGame.resultado)

export default router