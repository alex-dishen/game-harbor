import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import uniqid from 'uniqid';
import { getGamesList } from 'api/gameData';
import { setGameID } from 'redux/counterSlice';
import { handleFilterClick } from 'utils/helpers';
import places from 'pages/Home/QuickNavigation/constants';
import { Navigation } from 'pages/Home/QuickNavigation/styles';

function QuickNavigation() {
  const dispatch = useDispatch();

  const getRandomID = async () => {
    const randomPage = Math.floor(Math.random() * 10) + 1;
    const response = await getGamesList({
      page: randomPage,
      page_size: 40,
      ordering: '-added',
    });
    if (!response) return;
    const { results } = response;
    const IDs = results.map((result) => result.id);
    const randomIndex = Math.floor(Math.random() * 40);
    return IDs[randomIndex];
  };

  const setRandomGame = async (name: string) => {
    if (name !== 'Play Dice') return;
    const randomID = await getRandomID();
    if (randomID) dispatch(setGameID(randomID));
  };

  return (
    <Navigation>
      <h3>Quick Navigation</h3>
      {places.map((place) => (
        <Link
          key={uniqid()}
          to={place.place}
          onClick={(e) => {
            handleFilterClick(e, dispatch);
            setRandomGame(place.name);
          }}
        >
          {place.icon}
          {place.name}
        </Link>
      ))}
    </Navigation>
  );
}

export default QuickNavigation;
