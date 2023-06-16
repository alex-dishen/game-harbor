import { OptionsT } from 'pages/AddGame/SelectionModule/types';
import { useDispatch, useSelector } from 'react-redux';
import {
  setPlatforms,
  setGenres,
  setSelectedGenres,
  setSelectedPlatforms,
} from 'redux/counterSlice';
import { RootState } from 'redux/types';

export const useSelectionModule = (title: string) => {
  const dispatch = useDispatch();
  const reduxStore = useSelector((state: RootState) => state.harbor);

  const { platforms, genres, selectedPlatforms, selectedGenres } = reduxStore;
  const isPlatforms = title === 'Platforms';

  const optionsList = isPlatforms ? platforms : genres;
  const selectedOptions = isPlatforms ? selectedPlatforms : selectedGenres;
  const setOptions = isPlatforms ? setPlatforms : setGenres;
  const setSelectedOptions = isPlatforms
    ? setSelectedPlatforms
    : setSelectedGenres;

  const handleOptionClick = (option: OptionsT, reverse?: boolean) => {
    const arrayToIterate = reverse ? selectedOptions : optionsList;

    const updatedOptions = arrayToIterate?.filter(
      (optionList) => optionList.name !== option.name
    );

    const newOptionsList = reverse ? [...optionsList, option] : updatedOptions;
    const newSelectedOptions = reverse
      ? updatedOptions
      : [...selectedOptions, option];

    dispatch(setOptions(newOptionsList));
    dispatch(setSelectedOptions(newSelectedOptions));
  };

  return {
    optionsList,
    selectedOptions,
    handleOptionClick,
  };
};
