import { MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import uniqid from 'uniqid';
import { setCurrentFilter } from 'redux/counterSlice';
import places from 'pages/Home/QuickNavigation/constants';
import Navigation from 'pages/Home/QuickNavigation/styles';

function QuickNavigation() {
  const dispatch = useDispatch();

  const handleFilterClick = (e: MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    const { textContent } = target;

    if (!textContent) return;
    dispatch(setCurrentFilter(textContent));
  };

  return (
    <Navigation>
      <h3>Quick Navigation</h3>
      {places.map((place) => (
        <Link key={uniqid()} to={place.place} onClick={handleFilterClick}>
          {place.icon}
          {place.name}
        </Link>
      ))}
    </Navigation>
  );
}

export default QuickNavigation;
