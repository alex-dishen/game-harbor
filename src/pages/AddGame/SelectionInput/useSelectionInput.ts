import { useEffect, useRef, useState } from 'react';
import useClickOutside from 'hooks/useClickOutside';
import { OptionsT } from '../SelectionModule/types';
import { useDispatch, useSelector } from 'react-redux';
import { setPlatforms, setGenres } from 'redux/counterSlice';
import { RootState } from 'redux/types';

export const useSelectionInput = (options: OptionsT[], title: string) => {
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isOpenSelections, setIsOpenSelections] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<OptionsT[]>([]);
  const [isPlatforms, setIsPlatforms] = useState(false);
  const [isGenres, setIsGenres] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const reduxStore = useSelector((state: RootState) => state.harbor);

  const { selectedPlatforms, selectedGenres } = reduxStore;

  const handleSetIsOpenSelections = () =>
    setIsOpenSelections(!isOpenSelections);

  useClickOutside(isOpenSelections, popupRef, handleSetIsOpenSelections);

  useEffect(() => {
    setIsPlatforms(title === 'Platforms');
    setIsGenres(title === 'Genres');
  }, []);

  useEffect(() => {
    if (isPlatforms) setSelectedOptions(selectedPlatforms);

    if (isGenres) setSelectedOptions(selectedGenres);
  }, [isGenres, isPlatforms, selectedGenres, selectedPlatforms]);

  useEffect(() => {
    if (options.length !== 0 && isPlatforms) dispatch(setPlatforms(options));

    if (options.length !== 0 && isGenres) dispatch(setGenres(options));
  }, [dispatch, isGenres, isPlatforms, options, title]);

  return {
    selectedImage,
    isOpenSelections,
    popupRef,
    selectedOptions,
    setSelectedImage,
    setIsOpenSelections,
  };
};
