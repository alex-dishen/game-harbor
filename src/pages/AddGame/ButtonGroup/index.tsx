import { ButtonGroupWrapper, Button } from 'pages/AddGame/ButtonGroup/styles';

const ButtonGroup = () => (
  <ButtonGroupWrapper>
    <Button type="submit" color="#1E80C7">
      Save
    </Button>
    <Button type="button" color="#4F4F4F">
      Cancel
    </Button>
  </ButtonGroupWrapper>
);

export default ButtonGroup;
