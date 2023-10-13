import { Text } from 'components/Response/styles'
import { useSelector } from 'react-redux'
import { RootState } from 'redux/types'

const Response = () => {
  const addGamesState = useSelector((state: RootState) => state.addGame)

  const { responseMessage, isError } = addGamesState

  return <Text isError={isError}>{responseMessage}</Text>
}

export default Response
