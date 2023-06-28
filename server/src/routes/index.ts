import express from 'express'
import {
  getGames,
  getGame,
  createGame,
  updateGame,
  deleteGame
} from '../controllers'
import tryCatch from '../helpers'

const router = express.Router()

router.get('/games', tryCatch(getGames))

router.get('/games/:id', tryCatch(getGame))

router.post('/games', tryCatch(createGame))

router.put('/games/:id', tryCatch(updateGame))

router.delete('/games/:id', tryCatch(deleteGame))

export default router
