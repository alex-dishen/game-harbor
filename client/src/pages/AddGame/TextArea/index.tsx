import { TextAreaProps } from 'pages/AddGame/TextArea/types'
import { StyledTextArea } from 'pages/AddGame/TextArea/styles'
import { InputsWrapper, Star } from 'pages/AddGame/styles'

const TextArea = ({
  required,
  title,
  placeHolder,
  onChange,
}: TextAreaProps) => {
  return (
    <InputsWrapper>
      <p>
        {title}
        {required && <Star>*</Star>}
      </p>
      <StyledTextArea
        name="About"
        placeholder={placeHolder}
        onChange={onChange}
      />
    </InputsWrapper>
  )
}

export default TextArea
