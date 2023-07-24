import express from 'express'
import { getGames, getGame, createGame, deleteGame } from '../controllers'
import tryCatch from '../helpers'

const router = express.Router()

router.get('/games', tryCatch(getGames))

router.get('/games/:id', tryCatch(getGame))

router.post('/games', tryCatch(createGame))

router.delete('/games/:id', tryCatch(deleteGame))

export default router
