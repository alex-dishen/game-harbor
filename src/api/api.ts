const URL = 'https://api.rawg.io/api'
const API_KEY = import.meta.env.VITE_RAWG_API

const getData = async <T>(
  endpoint: string,
  params?: Record<string, string>,
) => {
  if (API_KEY !== undefined) {
    const searchParams = new URLSearchParams(params).toString()
    const response = await fetch(
      `${URL}/${endpoint}?${searchParams}&key=${API_KEY}`,
    )

    if (!response.ok) throw new Error(response.statusText)

    const data = (await response.json()) as Promise<T>

    return data
  }

  throw new Error('Api key is undefined')
}

export default getData
