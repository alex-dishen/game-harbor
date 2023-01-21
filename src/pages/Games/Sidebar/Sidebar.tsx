import { useState, MouseEvent, useRef, RefObject } from 'react';
import uniqid from 'uniqid';
import { releases, tops, platforms, genres } from './categories';
import { ReactComponent as Close } from '../../../assets/close.svg';
import { StyledNavbar, CloseHolder, CategoryHolder, Filter } from './styles';

interface Props {
  isChangeNavbar: boolean;
  currentFilter: string;
  setIsHideNavbar: (a: boolean) => void;
  setCurrentFilter: (a: string) => void;
}

function Sidebar({
  isChangeNavbar,
  currentFilter,
  setCurrentFilter,
  setIsHideNavbar,
}: Props) {
  const getCurrentFilter = (e: MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    const { textContent } = target;

    if (textContent !== null) setCurrentFilter(textContent);
  };

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
          <Filter
            key={uniqid()}
            onClick={getCurrentFilter}
            filterName={release.name}
            currentFilter={currentFilter}
          >
            <div>{release.icon}</div>
            {release.name}
          </Filter>
        ))}
      </CategoryHolder>

      <CategoryHolder>
        <div>Top</div>
        {tops.map((top) => (
          <Filter
            key={uniqid()}
            onClick={getCurrentFilter}
            filterName={top.name}
            currentFilter={currentFilter}
          >
            <div>{top.icon}</div>
            {top.name}
          </Filter>
        ))}
      </CategoryHolder>

      <CategoryHolder>
        <div>Platforms</div>
        {platforms.map((platform) => (
          <Filter
            key={uniqid()}
            onClick={getCurrentFilter}
            filterName={platform.name}
            currentFilter={currentFilter}
          >
            <div>{platform.icon}</div>
            {platform.name}
          </Filter>
        ))}
      </CategoryHolder>

      <CategoryHolder>
        <div>Genres</div>
        {genres.map((genre) => (
          <Filter
            key={uniqid()}
            onClick={getCurrentFilter}
            filterName={genre.name}
            currentFilter={currentFilter}
          >
            <div>{genre.icon}</div>
            {genre.name}
          </Filter>
        ))}
      </CategoryHolder>
    </StyledNavbar>
  );
}

export default Sidebar;
