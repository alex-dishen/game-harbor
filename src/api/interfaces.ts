export interface ResponseSchema<T> {
  results: T[];
}

export interface IGetGamesList {
  page?: number;
  page_size?: number;
  search?: string;
  dates?: string;
  ordering?: string;
  platforms?: number;
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
  developers: {
    name: string;
  }[];
  publishers: {
    name: string;
  }[];
  parent_platforms: {
    platform: {
      id: number;
      slug: string;
      name: string;
    };
  }[];
  platforms: {
    platform: {
      id: number;
      slug: string;
      name: string;
    };
  }[];
  genres: {
    name: string;
  }[];
  short_screenshots: {
    id: number;
    image: string;
  }[];
}
