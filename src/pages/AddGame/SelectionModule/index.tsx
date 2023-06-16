import Input from 'pages/AddGame/Input';
import { useSelectionModule } from 'pages/AddGame/SelectionModule/useSelectionModule';
import { SelectionModuleProps } from 'pages/AddGame/SelectionModule/types';
import { SelectionModuleWrapper } from 'pages/AddGame/SelectionModule/styles';
import OptionsList from '../OptionsList';

const SelectionModule = ({
  title,
  emoji,
  popupRef,
  description,
  placeholder,
  options,
}: SelectionModuleProps) => {
  const { optionsList, selectedOptions, handleOptionClick } =
    useSelectionModule(options);

  return (
    <SelectionModuleWrapper ref={popupRef}>
      <h3>
        {emoji} {title}
      </h3>
      <p>{description}</p>
      <Input type="text" title="" placeHolder={placeholder} />
      <OptionsList value={optionsList} onClick={handleOptionClick} />

      {selectedOptions.length !== 0 && (
        <>
          <h3>Selected {title}</h3>
          <OptionsList
            value={selectedOptions}
            onClick={handleOptionClick}
            reverse
          />
        </>
      )}
    </SelectionModuleWrapper>
  );
};

export default SelectionModule;
