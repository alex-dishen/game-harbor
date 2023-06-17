import { useSelector } from 'react-redux';
import {
  setPlatforms,
  setGenres,
  setSelectedGenres,
  setSelectedPlatforms,
  setPublishers,
  setDevelopers,
} from 'redux/counterSlice';
import { RootState } from 'redux/types';

export const useSelectedOptions = () => {
  const reduxStore = useSelector((state: RootState) => state.harbor);

  const {
    platforms,
    genres,
    selectedPlatforms,
    selectedGenres,
    publishers,
    developers,
  } = reduxStore;

  const optionsList = {
    Platforms: platforms,
    Genres: genres,
    Publishers: publishers,
    Developers: developers,
  };

  const selectedOptionsList = {
    Platforms: selectedPlatforms,
    Genres: selectedGenres,
    Publishers: publishers,
    Developers: developers,
  };

  const setOptionsList = {
    Platforms: setPlatforms,
    Genres: setGenres,
  };

  const setSelectedOptionsList = {
    Platforms: setSelectedPlatforms,
    Genres: setSelectedGenres,
    Publishers: setPublishers,
    Developers: setDevelopers,
  };

  return {
    optionsList,
    selectedOptionsList,
    setOptionsList,
    setSelectedOptionsList,
  };
};
