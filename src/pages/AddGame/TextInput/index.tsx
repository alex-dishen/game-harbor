import { TextInputProps } from 'pages/AddGame/TextInput/types';
import { Input } from 'pages/AddGame/TextInput/styles';
import { InputsWrapper, Star } from 'styles';

const TextInput = ({
  type,
  title,
  placeHolder,
  isRequired,
}: TextInputProps) => {
  const lowerCaseTitle = title.toLowerCase();

  return (
    <InputsWrapper>
      <label htmlFor={lowerCaseTitle}>
        {title}
        {isRequired ? <Star>*</Star> : ''}
      </label>
      <Input
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

export default TextInput;
