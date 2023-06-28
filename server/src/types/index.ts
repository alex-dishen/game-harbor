import { Request } from 'express'
import { ParamsDictionary } from 'express-serve-static-core'

type RequestBody = {
  title: string
  image: string
  about: string
  releaseDate: string
  platforms: string[]
  genres: string[]
  publishers: string[]
  developers: string[]
  website: string
}

type PostgresError = {
  length: number
  name: string
  severity: string
  code: string
  detail: string
  schema: string
  table: string
  constraint: string
  file: string
  line: string
  routine: string
}

export type UpdatedError = Error & PostgresError

export type UpdatedRequest = Request<ParamsDictionary, unknown, RequestBody>
