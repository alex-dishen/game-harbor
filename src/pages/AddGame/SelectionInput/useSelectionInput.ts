import { useEffect, useRef, useState } from 'react';
import useClickOutside from 'hooks/useClickOutside';
import { OptionsT } from '../SelectionModule/types';
import { useDispatch } from 'react-redux';
import { setPlatforms, setGenres } from 'redux/counterSlice';

export const useSelectionInput = (options: OptionsT[], title: string) => {
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isOpenSelections, setIsOpenSelections] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  const handleSetIsOpenSelections = () =>
    setIsOpenSelections(!isOpenSelections);

  useClickOutside(isOpenSelections, popupRef, handleSetIsOpenSelections);

  useEffect(() => {
    if (options.length !== 0 && title === 'Platforms')
      dispatch(setPlatforms(options));

    if (options.length !== 0 && title === 'Genres')
      dispatch(setGenres(options));
  }, [dispatch, options, title]);

  return {
    selectedImage,
    isOpenSelections,
    popupRef,
    setSelectedImage,
    setIsOpenSelections,
  };
};
