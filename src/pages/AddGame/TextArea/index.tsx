import { TextAreaProps } from 'pages/AddGame/TextArea/types';
import { StyledTextArea } from 'pages/AddGame/TextArea/styles';
import { InputsWrapper, Star } from 'pages/AddGame/styles';

const TextArea = ({ title, placeHolder }: TextAreaProps) => (
  <InputsWrapper>
    <p>
      {title}
      <Star>*</Star>
    </p>
    <StyledTextArea
      name="About"
      placeholder={placeHolder}
      required
    ></StyledTextArea>
  </InputsWrapper>
);

export default TextArea;
