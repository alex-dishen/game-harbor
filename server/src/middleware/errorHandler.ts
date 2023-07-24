import { NextFunction, Response } from 'express'
import { UpdatedError, UpdatedRequest } from '../types'

export const errorHandler = (
  error: UpdatedError,
  req: UpdatedRequest,
  res: Response,
  next: NextFunction
) => {
  if (error.constraint === 'game_name_key') {
    const { name } = req.body

    res.status(400).send(`A game with the title '${name}' already exists`)
  }

  res.status(400).send(error.message)
}
