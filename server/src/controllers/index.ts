import { NextFunction, Request, Response } from 'express'
import pool from '../db'
import { UpdatedRequest } from '../types'

export const getGames = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = await pool.query('SELECT * FROM game;')
  res.status(200).json(data.rows)
}

export const getGame = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params

  const data = await pool.query('SELECT * FROM game WHERE game_id = $1;', [id])

  if (data.rows.length === 0) throw new Error("We didn't find the streamer")

  res.status(200).json(data.rows)
}

export const createGame = async (
  req: UpdatedRequest,
  res: Response,
  next: NextFunction
) => {
  const {
    title,
    image,
    about,
    releaseDate,
    platforms,
    genres,
    publishers,
    developers,
    website
  } = req.body

  await pool.query(
    `INSERT INTO game(game_id, title, image, about, release_date, platforms, genres, publishers, developers, website_url) 
         VALUES(uuid_generate_v4(), $1, $2, $3, $4, $5, $6, $7, $8, $9);`,
    [
      title,
      image,
      about,
      releaseDate,
      platforms,
      genres,
      publishers,
      developers,
      website
    ]
  )

  const newGame = await pool.query(
    `SELECT * FROM game ORDER BY created_at DESC LIMIT 1`
  )

  res.status(200).json(newGame.rows)
}

export const updateGame = async (
  req: UpdatedRequest,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params
  const {
    title,
    image,
    about,
    releaseDate,
    platforms,
    genres,
    publishers,
    developers,
    website
  } = req.body

  await pool.query(
    'UPDATE game SET title = $1, image = $2, about = $3, release_date = $4, platforms = $5, genres = $6, publishers = $7, developers = $8, website_url = $9 WHERE game_id = $10;',
    [
      title,
      image,
      about,
      releaseDate,
      platforms,
      genres,
      publishers,
      developers,
      website,
      id
    ]
  )

  await getGame(req, res, next)
}

export const deleteGame = async (req: Request, res: Response) => {
  const { id } = req.params

  const data = await pool.query('DELETE FROM game WHERE game_id = $1;', [id])
  res.json(data)
}
