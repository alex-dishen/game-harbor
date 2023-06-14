import { useAddGame } from 'pages/AddGame/useAddGame';
import { AddGameProps } from 'pages/AddGame/types';
import { AddGameWrapper, Header } from 'pages/AddGame/styles';
import { Video } from 'pages/Home/styles';
import video from 'assets/images/crystal.mp4';
import Form from 'components/Form';

const AddGame = ({}: AddGameProps) => {
  useAddGame();

  return (
    <>
      <AddGameWrapper>
        <Header>Add a missing game</Header>
        <Form />
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
  );
};

export default AddGame;
