import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Top from './components/Top';
import GameList from './components/GameList';
import { changeParentHeight } from '../../utils/helpers';
import { ReactComponent as Menu } from '../../assets/menu.svg';

interface Props {
  isChangeNavbar: boolean;
  setIsChangeNavbar: (a: boolean) => void;
}

function Games({ isChangeNavbar, setIsChangeNavbar }: Props) {
  const gamesRef = useRef<HTMLDivElement>(null);
  const [isHideNavbar, setIsHideNavbar] = useState(false);

  const getWindowWidth = () => {
    const { innerWidth } = window;

    if (innerWidth <= 700) {
      if (!isHideNavbar) {
        setIsHideNavbar(true);
        setIsChangeNavbar(true);
      }
    } else {
      setIsHideNavbar(false);
      setIsChangeNavbar(false);
    }
  };

  useEffect(() => {
    changeParentHeight(gamesRef, '100%');
  }, []);

  useEffect(() => {
    getWindowWidth();

    window.addEventListener('resize', getWindowWidth);

    return () => {
      window.removeEventListener('resize', getWindowWidth);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isChangeNavbar]);

  return (
    <StyledGamePage ref={gamesRef}>
      {isHideNavbar ? (
        <MenuHolder onClick={() => setIsHideNavbar(false)}>
          <Menu />
        </MenuHolder>
      ) : (
        <Navbar
          isChangeNavbar={isChangeNavbar}
          setIsHideNavbar={setIsHideNavbar}
        />
      )}
      <Content>
        <Top />
        <GameList />
      </Content>
    </StyledGamePage>
  );
}

const StyledGamePage = styled.main`
  display: flex;
  gap: 45px;
  padding: 0px 30px;
  color: white;

  /* & {
    height: 100%;
  } */

  @media (max-width: 700px) {
    padding: 25px 0px;
  }
`;

const MenuHolder = styled.div`
  position: fixed;
  z-index: 1;
  bottom: 30px;
  right: 20px;
  display: flex;
  padding: 5px;
  background-color: white;
  border-radius: 50%;
  cursor: pointer;

  svg {
    height: 22px;
    width: 22px;
  }
`;

const Content = styled.div`
  flex: 1;
  padding: 0 15px 10px 15px;
  /* height: 84.5vh; */
  padding-bottom: 30px;
  height: 100%;
  overflow: scroll;

  svg {
    fill: white;
  }

  @media (max-width: 700px) {
    padding: 0 35px 10px 35px;
  }
`;

export default Games;
