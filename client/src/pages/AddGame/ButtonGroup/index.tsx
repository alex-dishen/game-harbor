import { useTheme } from 'styled-components'
import { Button } from 'pages/AddGame/ButtonGroup/styles'
import { ButtonGroupT } from 'pages/AddGame/ButtonGroup/types'

const ButtonGroup = ({ resetForm }: ButtonGroupT) => {
  const theme = useTheme()

  return (
    <>
      <Button type="submit" color={theme.colors.blue[150]}>
        Save
      </Button>
      <Button onClick={resetForm} type="button" color={theme.colors.black[50]}>
        Cancel
      </Button>
    </>
  )
}

export default ButtonGroup
