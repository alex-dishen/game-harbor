import uniqid from 'uniqid';
import styled from 'styled-components';
import { releases, tops, platforms, genres } from '../utils/categories';

function Sidebar() {
  return (
    <Aside>
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
    </Aside>
  );
}

const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 30px;
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
  }

  svg {
    fill: white;
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

export default Sidebar;
