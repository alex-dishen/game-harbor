const URL = 'https://api.rawg.io/api';
const API_KEY = process.env.REACT_APP_RAWG_API;
const otherKey = process.env.REACT_APP_GAME_API;

interface ResponseSchema<T> {
  results: T[];
}

async function getData<T>(endpoint: string, params?: Record<string, string>) {
  if (otherKey !== undefined) {
    const searchParams = new URLSearchParams(params).toString();
    const response = await fetch(
      `${URL}/${endpoint}?${searchParams}&ordering=-added&key=${otherKey}`
    );
    if (!response.ok) throw new Error(response.statusText);
    const data = (await response.json()) as Promise<T>;
    return data;
  }
  throw new Error('Api key is undefined');
}

export default getData;
export type { ResponseSchema };
