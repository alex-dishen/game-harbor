import { IGame } from 'api/interfaces';
import uniqid from 'uniqid';

interface PublishersProps {
  gameSpecification: IGame | undefined;
  setEmptyOrComa: (index: number, array: []) => string;
}

function Publishers({ gameSpecification, setEmptyOrComa }: PublishersProps) {
  return (
    <span>
      {gameSpecification?.publishers.map((publisher, index) => (
        <span key={uniqid()}>
          {publisher.name +
            setEmptyOrComa(index, gameSpecification?.publishers as [])}
        </span>
      ))}
    </span>
  );
}

export default Publishers;
