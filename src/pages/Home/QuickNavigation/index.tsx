import { useEffect, useState, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import uniqid from 'uniqid';
import places from 'pages/Home/QuickNavigation/constants';
import Navigation from 'pages/Home/QuickNavigation/styles';

interface PlaceProps {
  name: string;
  icon: JSX.Element;
  setCurrentFilter: (a: string) => void;
}

interface QuickNavigationProps {
  setCurrentFilter: (a: string) => void;
}

function Place({ name, icon, setCurrentFilter }: PlaceProps) {
  const [goTo, setGoTo] = useState('');

  const openPages = (placeName: string) =>
    placeName === 'Play Dice' ? 'games/game' : 'games';

  const handleFilterClick = (e: MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    const { textContent } = target;

    if (textContent !== null) setCurrentFilter(textContent);
  };

  useEffect(() => {
    setGoTo(openPages(name));
  }, []);

  return (
    <Link to={goTo} onClick={handleFilterClick}>
      {icon}
      {name}
    </Link>
  );
}

function QuickNavigation({ setCurrentFilter }: QuickNavigationProps) {
  return (
    <Navigation>
      <h3>Quick Navigation</h3>
      {places.map((place) => (
        <Place
          key={uniqid()}
          name={place.name}
          icon={place.icon}
          setCurrentFilter={setCurrentFilter}
        />
      ))}
    </Navigation>
  );
}

export default QuickNavigation;
