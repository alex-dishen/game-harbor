/* eslint-disable @typescript-eslint/naming-convention */
import { NextFunction, Request, Response } from 'express'
import pool from '../db'
import { UpdatedRequest } from '../types'
import { QueryResult } from 'pg'

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

  const data = await pool.query('SELECT * FROM game WHERE id = $1;', [id])

  if (data.rows.length === 0) throw new Error("We didn't find the game")

  res.status(200).json(data.rows)
}

export const createGame = async (
  req: UpdatedRequest,
  res: Response,
  next: NextFunction
) => {
  const {
    name,
    background_image,
    description_raw,
    released,
    parent_platforms,
    genres,
    publishers,
    developers,
    website
  } = req.body

  await pool.query(
    `INSERT INTO game(id, name, background_image, description_raw, released, parent_platforms, genres, publishers, developers, website) 
         VALUES(uuid_generate_v4(), $1, $2, $3, $4, $5, $6, $7, $8, $9);`,
    [
      name,
      background_image,
      description_raw,
      released,
      parent_platforms,
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

export const deleteGame = async (req: Request, res: Response) => {
  const { id } = req.params
  const queryResult: QueryResult<{ count: string }> = await pool.query(
    'SELECT COUNT(*) FROM game;'
  )

  const totalGames = parseInt(queryResult.rows[0].count, 10)

  if (totalGames <= 1) throw new Error("You can't delete the last game")

  const data = await pool.query('DELETE FROM game WHERE id = $1;', [id])
  res.json(data)
}
