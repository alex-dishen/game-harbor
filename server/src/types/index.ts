import { Request } from 'express'
import { ParamsDictionary } from 'express-serve-static-core'

type RequestBody = {
  name: string
  background_image: string
  description_raw: string
  released: string
  parent_platforms: string[]
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
