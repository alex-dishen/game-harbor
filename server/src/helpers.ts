import { Response } from 'express'
import { PostgresError } from './types'

export const sendErrorMessage = (
  err: PostgresError,
  res: Response,
  title: string,
  website: string
) => {
  console.error(err)
  if (err.code !== '23505') {
    console.error(err)
    return res.status(500).json({ error: 'Failed to create game' })
  }

  const constraintName = err.constraint

  if (constraintName === 'game_title_key')
    return res
      .status(400)
      .json({ error: `A game with the title '${title}' already exists` })

  if (constraintName === 'game_website_url_key')
    return res
      .status(400)
      .json({ error: `A game with  website URL '${website}' already exists` })

  res.status(400).json({ error: 'A unique constraint violation occurred' })
}
