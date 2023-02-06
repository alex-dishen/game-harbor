import { IGame } from 'api/interfaces';
import uniqid from 'uniqid';

interface GenresProps {
  gameSpecification: IGame | undefined;
  setEmptyOrComa: (index: number, array: []) => string;
}

function Genres({ gameSpecification, setEmptyOrComa }: GenresProps) {
  return (
    <span>
      {gameSpecification?.genres.map((genre, index) => (
        <span key={uniqid()}>
          {genre.name + setEmptyOrComa(index, gameSpecification?.genres as [])}
        </span>
      ))}
    </span>
  );
}

export default Genres;
