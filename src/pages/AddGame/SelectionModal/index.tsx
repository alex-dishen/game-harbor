import Input from 'pages/AddGame/Input';
import { useSelectionModal } from 'pages/AddGame/SelectionModal/useSelectionModal';
import { SelectionModuleProps } from 'pages/AddGame/SelectionModal/types';
import { SelectionModuleWrapper } from 'pages/AddGame/SelectionModal/styles';
import OptionsList from 'pages/AddGame/OptionsList';
import { ReactComponent as Plus } from 'assets/images/plus.svg';

const SelectionModal = ({
  title,
  emoji,
  popupRef,
  description,
  placeholder,
  options,
}: SelectionModuleProps) => {
  const { optionsList, selectedOptions, handleOptionClick } =
    useSelectionModal(title);

  return (
    <SelectionModuleWrapper ref={popupRef}>
      <h3>
        {emoji} {title}
      </h3>
      <p>{description}</p>
      {options.length !== 0 ? (
        <OptionsList value={optionsList} onClick={handleOptionClick} />
      ) : (
        <Input
          type="text"
          title=""
          placeHolder={placeholder}
          icon={<Plus style={{ fill: 'white' }} />}
        />
      )}

      {options.length !== 0 && selectedOptions.length !== 0 && (
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

export default SelectionModal;