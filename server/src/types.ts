import { Request } from 'express'
import { ParamsDictionary } from 'express-serve-static-core'

export type PostgresError = {
  length: number
  severity: string
  code: string
  detail: string
  hint: string | undefined
  position: string | undefined
  internalPosition: string | undefined
  internalQuery: string | undefined
  where: string | undefined
  schema: string
  table: string
  column: string | undefined
  dataType: string | undefined
  constraint: string
  file: string
  line: string
  routine: string
}

export type RequestBody = {
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

export type UpdatedRequest = Request<ParamsDictionary, unknown, RequestBody>
