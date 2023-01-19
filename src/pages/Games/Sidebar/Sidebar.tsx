import uniqid from 'uniqid';
import { releases, tops, platforms, genres } from './categories';
import { ReactComponent as Close } from '../../../assets/close.svg';
import { StyledNavbar, CloseHolder, CategoryHolder, Filter } from './styles';

interface Props {
  isChangeNavbar: boolean;
  setIsHideNavbar: (a: boolean) => void;
}

function Sidebar({ isChangeNavbar, setIsHideNavbar }: Props) {
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

export default Sidebar;
