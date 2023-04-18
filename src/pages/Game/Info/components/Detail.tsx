import uniqid from 'uniqid';
import { setEmptyOrComa } from 'pages/Game/Info/helpers';

interface DevelopersProps {
  specifications: { name: string; platform?: { name: string } }[];
}

function Details({ specifications }: DevelopersProps) {
  return (
    <span>
      {specifications.map((specification, index) => (
        <span key={uniqid()}>
          {specification.name ? (
            <>
              {specification.name + setEmptyOrComa(index, specifications as [])}
            </>
          ) : (
            <>
              {(specification.platform?.name ?? '') +
                setEmptyOrComa(index, specifications as [])}
            </>
          )}
        </span>
      ))}
    </span>
  );
}

export default Details;
