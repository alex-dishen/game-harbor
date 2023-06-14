import { TextAreaProps } from 'components/TextArea/types';
import { StyledTextArea } from 'components/TextArea/styles';
import { InputsWrapper } from 'styles';

const TextArea = ({ title, placeHolder }: TextAreaProps) => (
  <InputsWrapper>
    <p>{title}</p>
    <StyledTextArea name="About" placeholder={placeHolder}></StyledTextArea>
  </InputsWrapper>
);

export default TextArea;
