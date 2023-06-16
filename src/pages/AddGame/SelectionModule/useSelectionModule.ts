import { useState } from 'react';
import { OptionsT } from 'pages/AddGame/SelectionModule/types';

export const useSelectionModule = (options?: OptionsT[]) => {
  const [optionsList, setOptionsList] = useState(options);
  const [selectedOptions, setSelectedOptions] = useState<OptionsT[]>([]);

  const handleOptionClick = (option: OptionsT, reverse?: boolean) => {
    if (!optionsList) return;

    const arrayToIterate = reverse ? selectedOptions : optionsList;

    const updatedOptions = arrayToIterate?.filter(
      (optionList) => optionList.name !== option.name
    );

    const newOptionsList = reverse ? [...optionsList, option] : updatedOptions;
    const newSelectedOptions = reverse
      ? updatedOptions
      : [...selectedOptions, option];

    setOptionsList(newOptionsList);
    setSelectedOptions(newSelectedOptions);
  };

  return { optionsList, selectedOptions, handleOptionClick };
};
