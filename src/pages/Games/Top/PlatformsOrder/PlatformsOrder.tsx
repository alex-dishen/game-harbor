import { useState, MouseEvent } from 'react';
import uniqid from 'uniqid';
import { xbox, apple, playStation, nintendo } from '../options';
import { ReactComponent as ChevronRight } from '../../../../assets/chevron-right.svg';
import { Option, MoreOptions, OptionsHolder, AdditionalOption } from './styles';

interface Props {
  setTitle: (a: string) => void;
  isChangeNavbar: boolean;
  openAndHidePlatformOrder: () => void;
}

function PlatformsOrder({
  setTitle,
  isChangeNavbar,
  openAndHidePlatformOrder,
}: Props) {
  const [isPlayStationHovered, setIsPlayStationHovered] = useState(false);
  const [isXboxHovered, setIsXboxHovered] = useState(false);
  const [isAppleHovered, setIsAppleHovered] = useState(false);
  const [isNintendoHovered, setIsNintendoHovered] = useState(false);

  const changeTitle = (e: MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    const { textContent } = target;

    if (textContent !== null) setTitle(textContent);
  };

  const handleOptionClick = (e: MouseEvent<HTMLElement>) => {
    changeTitle(e);
    openAndHidePlatformOrder();
  };

  const handleMouseOver = (e: MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    const textContent = target.textContent?.replace(/\s/g, '');

    if (textContent === 'PlayStation') {
      setIsPlayStationHovered(true);
    } else if (textContent === 'Xbox') {
      setIsXboxHovered(true);
    } else if (textContent === 'Macintosh') {
      setIsAppleHovered(true);
    } else if (textContent === 'Nintendo') {
      setIsNintendoHovered(true);
    }
  };

  return (
    <>
      <p>Platforms</p>
      <Option onClick={handleOptionClick}>PC</Option>

      <MoreOptions
        onMouseEnter={handleMouseOver}
        onMouseLeave={() => setIsPlayStationHovered(false)}
      >
        PlayStation <ChevronRight />
        {isPlayStationHovered && (
          <OptionsHolder isChangeNavbar={isChangeNavbar}>
            {playStation.map((option) => (
              <AdditionalOption onClick={handleOptionClick} key={uniqid()}>
                {option}
              </AdditionalOption>
            ))}
            <hr />
            <span>Select all</span>
          </OptionsHolder>
        )}
      </MoreOptions>

      <MoreOptions
        onMouseEnter={handleMouseOver}
        onMouseLeave={() => setIsXboxHovered(false)}
      >
        Xbox <ChevronRight />
        {isXboxHovered && (
          <OptionsHolder isChangeNavbar={isChangeNavbar}>
            {xbox.map((option) => (
              <AdditionalOption onClick={handleOptionClick} key={uniqid()}>
                {option}
              </AdditionalOption>
            ))}
            <hr />
            <span>Select all</span>
          </OptionsHolder>
        )}
      </MoreOptions>

      <Option onClick={handleOptionClick}>iOS</Option>
      <Option onClick={handleOptionClick}>Android</Option>

      <MoreOptions
        onMouseEnter={handleMouseOver}
        onMouseLeave={() => setIsAppleHovered(false)}
      >
        Macintosh <ChevronRight />
        {isAppleHovered && (
          <OptionsHolder isChangeNavbar={isChangeNavbar}>
            {apple.map((option) => (
              <AdditionalOption onClick={handleOptionClick} key={uniqid()}>
                {option}
              </AdditionalOption>
            ))}
            <hr />
            <span>Select all</span>
          </OptionsHolder>
        )}
      </MoreOptions>

      <Option onClick={handleOptionClick}>Linux</Option>

      <MoreOptions
        onMouseEnter={handleMouseOver}
        onMouseLeave={() => setIsNintendoHovered(false)}
      >
        Nintendo <ChevronRight />
        {isNintendoHovered && (
          <OptionsHolder isChangeNavbar={isChangeNavbar}>
            {nintendo.map((option) => (
              <AdditionalOption onClick={handleOptionClick} key={uniqid()}>
                {option}
              </AdditionalOption>
            ))}
            <hr />
            <span>Select all</span>
          </OptionsHolder>
        )}
      </MoreOptions>

      <Option onClick={handleOptionClick}>Web</Option>
    </>
  );
}

export default PlatformsOrder;
