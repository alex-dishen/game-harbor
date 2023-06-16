import { InputProps } from 'pages/AddGame/Input/types';
import { StyledInput } from 'pages/AddGame/Input/styles';
import { InputsWrapper, Star } from 'pages/AddGame/styles';

const Input = ({ type, title, placeHolder, isRequired }: InputProps) => {
  const lowerCaseTitle = title.toLowerCase();

  return (
    <InputsWrapper>
      <label htmlFor={lowerCaseTitle}>
        {title}
        {isRequired ? <Star>*</Star> : ''}
      </label>
      <StyledInput
        type={type}
        name={lowerCaseTitle}
        id={lowerCaseTitle}
        placeholder={placeHolder}
        autoComplete="off"
        required={isRequired}
      />
    </InputsWrapper>
  );
};

export default Input;
