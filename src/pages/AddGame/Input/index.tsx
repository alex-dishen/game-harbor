import { InputProps } from 'pages/AddGame/Input/types';
import {
  StyledInput,
  InputContainer,
  IconHolder,
} from 'pages/AddGame/Input/styles';
import { InputsWrapper, Star } from 'pages/AddGame/styles';

const Input = ({ type, title, placeHolder, isRequired, icon }: InputProps) => {
  const lowerCaseTitle = title.toLowerCase();

  return (
    <InputsWrapper>
      <label htmlFor={lowerCaseTitle}>
        {title}
        {isRequired ? <Star>*</Star> : ''}
      </label>
      <InputContainer>
        <StyledInput
          type={type}
          name={lowerCaseTitle}
          id={lowerCaseTitle}
          placeholder={placeHolder}
          autoComplete="off"
          required={isRequired}
        />
        {icon && <IconHolder type="button">{icon}</IconHolder>}
      </InputContainer>
    </InputsWrapper>
  );
};

export default Input;
