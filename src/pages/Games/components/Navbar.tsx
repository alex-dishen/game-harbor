import uniqid from 'uniqid';
import styled, { CSSObject } from 'styled-components';
import { releases, tops, platforms, genres } from '../../../utils/categories';
import { ReactComponent as Close } from '../../../assets/close.svg';

interface Props {
  isChangeNavbar: boolean;
  setIsHideNavbar: (a: boolean) => void;
}

interface NavProps {
  isChangeNavbar: boolean;
}

function Navbar({ isChangeNavbar, setIsHideNavbar }: Props) {
  return (
    <StyledNavbar isChangeNavbar={isChangeNavbar}>
      {isChangeNavbar && (
        <CloseHolder
          onClick={() => {
            setIsHideNavbar(true);
          }}
        >
          <Close />
        </CloseHolder>
      )}

      <CategoryHolder>
        <div>New Releases</div>
        {releases.map((release) => (
          <Filter key={uniqid()}>
            <div>{release.icon}</div>
            {release.name}
          </Filter>
        ))}
      </CategoryHolder>

      <CategoryHolder>
        <div>Top</div>
        {tops.map((top) => (
          <Filter key={uniqid()}>
            <div>{top.icon}</div>
            {top.name}
          </Filter>
        ))}
      </CategoryHolder>

      <CategoryHolder>
        <div>Platforms</div>
        {platforms.map((platform) => (
          <Filter key={uniqid()}>
            <div>{platform.icon}</div>
            {platform.name}
          </Filter>
        ))}
      </CategoryHolder>

      <CategoryHolder>
        <div>Genres</div>
        {genres.map((genre) => (
          <Filter key={uniqid()}>
            <div>{genre.icon}</div>
            {genre.name}
          </Filter>
        ))}
      </CategoryHolder>
    </StyledNavbar>
  );
}

const aside = {
  position: 'sticky',
  top: '0px',
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  gap: '30px',
  padding: '30px 0 20px 0',
  overflow: 'scroll',
};

const fullScreen = {
  position: 'fixed',
  zIndex: '4',
  top: '0',
  left: '0',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(190px, auto))',
  gap: '40px',
  height: '100%',
  width: '100%',
  padding: '30px',
  backgroundColor: 'rgb(15, 16, 17);',
  overflow: 'scroll',
};

const StyledNavbar = styled.nav<NavProps>`
  ${(props) =>
    props.isChangeNavbar ? (fullScreen as CSSObject) : (aside as CSSObject)}
`;

const CloseHolder = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  display: flex;
  padding: 5px;
  background-color: white;
  border-radius: 50%;
  cursor: pointer;

  svg {
    height: 25px;
    width: 25px;
  }
`;

const CategoryHolder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  & > div:first-child {
    font-size: 26px;
    font-weight: 600;
  }
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  cursor: pointer;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 38px;
    width: 38px;
    padding: 8px;
    background-color: rgb(45, 45, 45);
    border-radius: 8px;
    transition: 0.5s;
  }

  svg {
    fill: white;
    transition: 0.5s;
  }

  &:hover {
    div {
      background-color: rgb(255, 255, 255);
    }

    svg {
      fill: black;
    }
  }
`;

export default Navbar;
