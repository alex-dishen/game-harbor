import { Link } from 'react-router-dom';
import uniqid from 'uniqid';
import useQuickNavigation from 'pages/Home/QuickNavigation/useQuickNavigation';
import places from 'pages/Home/QuickNavigation/constants';
import { Navigation } from 'pages/Home/QuickNavigation/styles';

function QuickNavigation() {
  const { handleOnClick } = useQuickNavigation();

  return (
    <Navigation>
      <h3>Quick Navigation</h3>
      {places.map((place) => (
        <Link
          key={uniqid()}
          to={place.place}
          onClick={(e) => handleOnClick(e, place.name)}
        >
          {place.icon}
          {place.name}
        </Link>
      ))}
    </Navigation>
  );
}

export default QuickNavigation;
