import { Request, Response } from 'express'
import pool from '../db'
import { sendErrorMessage } from '../helpers'
import { PostgresError, UpdatedRequest } from '../types'

export const getGames = async (req: Request, res: Response) => {
  try {
    const data = await pool.query('SELECT * FROM game;')
    res.json(data.rows)
  } catch (err) {
    console.error(err)
  }
}

export const createGame = async (req: UpdatedRequest, res: Response) => {
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

  try {
    const data = await pool.query(
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
    res.json(data)
  } catch (err) {
    sendErrorMessage(err as PostgresError, res, title, website)
  }
}

export const updateGame = async (req: UpdatedRequest, res: Response) => {
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

  try {
    const data = await pool.query(
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
    res.json(data)
  } catch (err) {
    sendErrorMessage(err as PostgresError, res, title, website)
  }
}

export const deleteGame = async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    const data = await pool.query('DELETE FROM game WHERE game_id = $1;', [id])
    res.json(data)
  } catch (err) {
    console.error(err)
  }
}
