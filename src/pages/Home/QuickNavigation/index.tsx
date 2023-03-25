import { Link } from 'react-router-dom';
import uniqid from 'uniqid';
import useQuickNavigation from 'pages/Home/QuickNavigation/useQuickNavigation';
import { handleFilterClick } from 'utils/helpers';
import places from 'pages/Home/QuickNavigation/constants';
import { Navigation } from 'pages/Home/QuickNavigation/styles';

function QuickNavigation() {
  const { dispatch, setRandomGame } = useQuickNavigation();

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
