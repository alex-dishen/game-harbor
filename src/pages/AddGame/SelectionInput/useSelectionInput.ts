import { useRef, useState } from 'react';
import useClickOutside from 'hooks/useClickOutside';

export const useSelectionInput = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isOpenSelections, setIsOpenSelections] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  const handleSetIsOpenSelections = () =>
    setIsOpenSelections(!isOpenSelections);

  useClickOutside(isOpenSelections, popupRef, handleSetIsOpenSelections);

  return {
    selectedImage,
    isOpenSelections,
    popupRef,
    setSelectedImage,
    setIsOpenSelections,
  };
};
