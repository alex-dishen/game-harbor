import { NextFunction, Response } from 'express'
import { UpdatedError, UpdatedRequest } from '../types'

export const errorHandler = (
  error: UpdatedError,
  req: UpdatedRequest,
  res: Response,
  next: NextFunction
) => {
  if (error.constraint === 'game_title_key') {
    const { title } = req.body

    res.status(400).send(`A game with the title '${title}' already exists`)
  }

  if (error.constraint === 'game_website_url_key') {
    const { website } = req.body

    res.status(400).send(`A game with  website URL '${website}' already exists`)
  }

  res.status(400).send(error.message)
}
