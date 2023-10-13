import Input from 'pages/AddGame/Input'
import { useSelectionModal } from 'pages/AddGame/SelectionModal/useSelectionModal'
import { SelectionModuleProps } from 'pages/AddGame/SelectionModal/types'
import { SelectionModuleWrapper } from 'pages/AddGame/SelectionModal/styles'
import OptionsList from 'pages/AddGame/OptionsList'
import { ReactComponent as Plus } from 'assets/images/plus.svg'

const SelectionModal = ({
  title,
  emoji,
  popupRef,
  description,
  placeholder,
  optionsList,
  onChange,
}: SelectionModuleProps) => {
  const {
    options,
    inputName,
    selectedOptions,
    handlePlusClick,
    handleOptionClick,
  } = useSelectionModal(title, onChange)

  return (
    <SelectionModuleWrapper ref={popupRef}>
      <h3>
        {emoji} {title}
      </h3>
      <p>{description}</p>
      {optionsList.length !== 0 ? (
        <OptionsList value={options} onClick={handleOptionClick} />
      ) : (
        <Input
          type="text"
          name={inputName}
          title=""
          placeHolder={placeholder}
          icon={<Plus style={{ fill: 'white' }} />}
          onClick={handlePlusClick}
        />
      )}

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
  )
}

export default SelectionModal
