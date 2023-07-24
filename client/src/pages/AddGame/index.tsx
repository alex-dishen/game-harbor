import { useSelector } from 'react-redux'
import Form from 'pages/AddGame/Form'
import Response from 'components/Response'
import { RootState } from 'redux/types'
import { AddGameWrapper, Header } from 'pages/AddGame/styles'
import { Video } from 'pages/Home/styles'
import video from 'assets/images/crystal.mp4'

const AddGame = () => {
  const addGamesState = useSelector((state: RootState) => state.addGame)
  const { responseMessage } = addGamesState

  return (
    <>
      <AddGameWrapper
        initial={{ opacity: 0, x: -25 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        exit={{ opacity: 0, x: -25 }}
      >
        <Header>Add a missing game</Header>
        <Form />
        {responseMessage && <Response />}
      </AddGameWrapper>
      <Video
        autoPlay
        muted
        loop
        playsInline
        initial={{ opacity: 0, x: -25 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        exit={{ opacity: 0, x: -25 }}
      >
        <source src={video} type="video/mp4" />
      </Video>
    </>
  )
}

export default AddGame
