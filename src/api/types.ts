export type ResponseSchema<T> = {
  results: T[]
}

export type GetGameListTypes = {
  page?: number
  page_size?: number
  search?: string
  search_precise?: boolean
  dates?: string
  ordering?: string
  parent_platforms?: number
  genres?: string
}

export type ScreenshotsTypes = {
  id: number
  image: string
}

export type InfoGameSpecificationTypes = {
  name: string
  platform?: { name: string } | undefined
}

type NameTypes = {
  name: string
}

type PlatformTypes = {
  platform: {
    id: number
    slug: string
    name: string
  }
}

export type GameTypes = {
  id: number
  slug: string
  name: string
  price: number
  isInCart: boolean
  ratings_count: number
  description_raw: string
  website: string
  released: string
  background_image: string
  developers: NameTypes[]
  publishers: NameTypes[]
  parent_platforms: PlatformTypes[]
  platforms: PlatformTypes[]
  genres: NameTypes[]
  short_screenshots: ScreenshotsTypes[]

  [key: string]:
    | number
    | string
    | boolean
    | NameTypes[]
    | InfoGameSpecificationTypes[]
    | ScreenshotsTypes[]
    | PlatformTypes[]
}
