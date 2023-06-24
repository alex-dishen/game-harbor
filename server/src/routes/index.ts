import express from 'express'
import { getGames, createGame, updateGame, deleteGame } from '../controllers'

const router = express.Router()

router.get('/games', getGames)

router.post('/games', createGame)

router.put('/games/:id', updateGame)

router.delete('/games/:id', deleteGame)

export default router
