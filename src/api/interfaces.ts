export interface ResponseSchema<T> {
  results: T[];
}

export interface IGetGamesList {
  page?: number;
  page_size?: number;
  search?: string;
  search_precise?: boolean;
  dates?: string;
  ordering?: string;
  parent_platforms?: number;
  genres?: string;
}

export interface IScreenshots {
  id: number;
  image: string;
}

export interface IInfoGameSpecification {
  name: string;
  platform?: { name: string } | undefined;
}

interface IName {
  name: string;
}

interface IPlatform {
  platform: {
    id: number;
    slug: string;
    name: string;
  };
}

export interface IGame {
  id: number;
  slug: string;
  name: string;
  price: number;
  ratings_count: number;
  description_raw: string;
  website: string;
  released: string;
  background_image: string;
  developers: IName[];
  publishers: IName[];
  parent_platforms: IPlatform[];
  platforms: IPlatform[];
  genres: IName[];
  short_screenshots: IScreenshots[];

  [key: string]:
    | number
    | string
    | IName[]
    | IInfoGameSpecification[]
    | IScreenshots[]
    | IPlatform[];
}
