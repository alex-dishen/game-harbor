const URL = 'https://api.rawg.io/api';
const API_KEY = process.env.REACT_APP_RAWG_API;

async function getData<T>(endpoint: string, params?: Record<string, string>) {
  if (API_KEY !== undefined) {
    const searchParams = new URLSearchParams(params).toString();
    const response = await fetch(
      `${URL}/${endpoint}?${searchParams}&key=${API_KEY}`
    );
    // `${URL}/${endpoint}?${searchParams}&ordering=-added&key=${API_KEY}`
    if (!response.ok) throw new Error(response.statusText);
    const data = (await response.json()) as Promise<T>;
    return data;
  }
  throw new Error('Api key is undefined');
}

export default getData;
