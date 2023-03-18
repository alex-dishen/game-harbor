import { StyledPrice, Status } from 'pages/Game/Price/styles';
import { ReactComponent as Check } from 'assets/check.svg';

function Price() {
  return (
    <StyledPrice>
      <span>$13</span>
      {/* <Status>
        Added <Check />
      </Status> */}
    </StyledPrice>
  );
}

export default Price;
