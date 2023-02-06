import { IGame } from 'api/interfaces';
import uniqid from 'uniqid';

interface DevelopersProps {
  gameSpecification: IGame | undefined;
  setEmptyOrComa: (index: number, array: []) => string;
}

function Developers({ gameSpecification, setEmptyOrComa }: DevelopersProps) {
  return (
    <span>
      {gameSpecification?.developers.map((developer, index) => (
        <span key={uniqid()}>
          {developer.name +
            setEmptyOrComa(index, gameSpecification?.developers as [])}
        </span>
      ))}
    </span>
  );
}

export default Developers;
