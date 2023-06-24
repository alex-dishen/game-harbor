import { useTheme } from 'styled-components'
import { ButtonGroupWrapper, Button } from 'pages/AddGame/ButtonGroup/styles'

const ButtonGroup = () => {
  const theme = useTheme()

  return (
    <ButtonGroupWrapper>
      <Button type="submit" color={theme.colors.blue[150]}>
        Save
      </Button>
      <Button type="button" color={theme.colors.black[50]}>
        Cancel
      </Button>
    </ButtonGroupWrapper>
  )
}

export default ButtonGroup
