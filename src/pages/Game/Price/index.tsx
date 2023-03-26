import usePrice from 'pages/Game/Price/usePrice';
import { StyledPrice, Status } from 'pages/Game/Price/styles';
import { ReactComponent as Check } from 'assets/check.svg';

function Price() {
  const { returnGamePrice } = usePrice();

  return (
    <StyledPrice>
      <span>{returnGamePrice()}</span>
      <Status>
        Added <Check />
      </Status>
    </StyledPrice>
  );
}

export default Price;
