import { useFormContext } from 'react-hook-form'
import { GameTypes } from 'api/types'
import { InputProps } from 'pages/AddGame/Input/types'
import {
  StyledInput,
  InputContainer,
  IconHolder,
} from 'pages/AddGame/Input/styles'
import { InputsWrapper, Star } from 'pages/AddGame/styles'

const Input = ({
  icon,
  name,
  type,
  title,
  required,
  placeHolder,
  onClick,
}: InputProps) => {
  const lowerCaseTitle = title.toLowerCase()
  const { register } = useFormContext<GameTypes>()

  return (
    <InputsWrapper>
      <label htmlFor={lowerCaseTitle}>
        {title}
        {required ? <Star>*</Star> : ''}
      </label>
      <InputContainer>
        <StyledInput
          {...register(name, { required })}
          type={type}
          id={lowerCaseTitle}
          placeholder={placeHolder}
        />
        {icon && (
          <IconHolder type="button" onClick={onClick}>
            {icon}
          </IconHolder>
        )}
      </InputContainer>
    </InputsWrapper>
  )
}

export default Input
