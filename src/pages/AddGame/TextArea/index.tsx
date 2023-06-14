import { TextAreaProps } from 'pages/AddGame/TextArea/types';
import { StyledTextArea } from 'pages/AddGame/TextArea/styles';
import { InputsWrapper } from 'styles';

const TextArea = ({ title, placeHolder }: TextAreaProps) => (
  <InputsWrapper>
    <p>{title}</p>
    <StyledTextArea name="About" placeholder={placeHolder}></StyledTextArea>
  </InputsWrapper>
);

export default TextArea;
