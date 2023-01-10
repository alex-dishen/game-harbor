import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import uniqid from 'uniqid';
import styled from 'styled-components';
import places from '../../../utils/places';

type Props = {
  name: string;
  icon: JSX.Element;
};

function Place({ name, icon }: Props) {
  const [goTo, setGoTo] = useState('');

  const openPages = (nam: string) =>
    nam === 'Play Dice' ? 'games/game' : 'games';

  useEffect(() => {
    setGoTo(openPages(name));
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  width: min(240px, 40vw);
  padding: 15px 25px;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(3px);
  border-radius: 30px;

  h3 {
    margin: 0;
    color: white;
    font-size: 22px;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    gap: 8px;
    width: 100%;
    padding: 10px 0;
    background-color: white;
    color: black;
    border-radius: 16px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background-color: rgb(106, 190, 187);
      transform: scale(1.05);
    }

    &:active {
      transform: scale(1);
    }
  }

  svg {
    height: 20px;
    width: 20px;
  }
`;

export default QuickNavigation;
