import { useTextInput } from 'components/TextInput/useTextInput';
import { TextInputProps } from 'components/TextInput/types';
import { Input, Star } from 'components/TextInput/styles';
import { InputsWrapper } from 'styles';

const TextInput = ({
  type,
  title,
  placeHolder,
  isRequired,
}: TextInputProps) => {
  useTextInput();
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
