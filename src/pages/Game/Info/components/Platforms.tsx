import { IGame } from 'api/interfaces';
import uniqid from 'uniqid';

interface PlatformsProps {
  gameSpecification: IGame | undefined;
  setEmptyOrComa: (index: number, array: []) => string;
}

function Platforms({ gameSpecification, setEmptyOrComa }: PlatformsProps) {
  return (
    <span>
      {gameSpecification?.platforms.map((platform, index) => (
        <span key={uniqid()}>
          {platform.platform.name +
            setEmptyOrComa(index, gameSpecification?.platforms as [])}
        </span>
      ))}
    </span>
  );
}

export default Platforms;
