import { TextAreaProps } from 'pages/AddGame/TextArea/types'
import { StyledTextArea } from 'pages/AddGame/TextArea/styles'
import { InputsWrapper, Star } from 'pages/AddGame/styles'
import { useFormContext } from 'react-hook-form'
import { GameTypes } from 'api/types'

const TextArea = ({ name, required, title, placeHolder }: TextAreaProps) => {
  const { register } = useFormContext<GameTypes>()

  return (
    <InputsWrapper>
      <p>
        {title}
        {required && <Star>*</Star>}
      </p>
      <StyledTextArea
        {...register(name, { required })}
        name="About"
        placeholder={placeHolder}
      />
    </InputsWrapper>
  )
}

export default TextArea
