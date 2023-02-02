import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import uniqid from 'uniqid';
import places from 'pages/Home/QuickNavigation/places';
import Navigation from 'pages/Home/QuickNavigation/styles';

interface Props {
  name: string;
  icon: JSX.Element;
}

function Place({ name, icon }: Props) {
  const [goTo, setGoTo] = useState('');

  const openPages = (placeName: string) =>
    placeName === 'Play Dice' ? 'games/game' : 'games';

  useEffect(() => {
    setGoTo(openPages(name));
  }, []);

  return (
    <Link to={goTo}>
      {icon}
      {name}
    </Link>
  );
}

function QuickNavigation() {
  return (
    <Navigation>
      <h3>Quick Navigation</h3>
      {places.map((place) => (
        <Place key={uniqid()} name={place.name} icon={place.icon} />
      ))}
    </Navigation>
  );
}

export default QuickNavigation;
