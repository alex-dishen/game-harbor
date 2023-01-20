const URL = 'https://api.rawg.io/api';
const API_KEY = process.env.REACT_APP_RAWG_API;
const otherKey = process.env.REACT_APP_GAME_API;

const getData = async () => {
  if (otherKey !== undefined) {
    const response = await fetch(`${URL}/games?key=${otherKey}`);
    const data = (await response.json()) as Promise<object>;
    console.log(data);
    // return data;
  } else {
    throw new Error('Api key is undefined');
  }
};

export default getData;
