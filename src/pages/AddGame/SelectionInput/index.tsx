import OptionsList from 'pages/AddGame/OptionsList'
import SelectionModal from 'pages/AddGame/SelectionModal'
import { useSelectionInput } from 'pages/AddGame/SelectionInput/useSelectionInput'
import { useSelectionModal } from 'pages/AddGame/SelectionModal/useSelectionModal'
import { SelectionProps } from 'pages/AddGame/SelectionInput/types'
import { TitleT } from 'pages/AddGame/types'
import {
  SelectionBody,
  AddButton,
  DescriptionHolder,
} from 'pages/AddGame/SelectionInput/styles'
import { InputsWrapper, Star } from 'pages/AddGame/styles'
import { ReactComponent as Plus } from 'assets/images/plus_without_frame.svg'

const SelectionInput = ({
  title,
  emoji,
  isRequired,
  placeholder,
  description,
  icon = <Plus />,
  inputDescription,
  inputPlaceholder,
  optionsList = [],
  onChange,
}: SelectionProps) => {
  const { popupRef, selectedOptions, isOpenSelections, setIsOpenSelections } =
    useSelectionInput(optionsList, title as TitleT)

  const { handleOptionClick } = useSelectionModal(title as TitleT, onChange)

  return (
    <InputsWrapper>
      <p>
        {title}
        {isRequired ? <Star>*</Star> : ''}
      </p>

      <SelectionBody>
        <AddButton type="button" onClick={() => setIsOpenSelections(true)}>
          {icon} {placeholder}
        </AddButton>

        <>
          {selectedOptions?.length === 0 ? (
            <DescriptionHolder>
              <p>{emoji}</p>
              <p>{description}</p>
            </DescriptionHolder>
          ) : (
            <OptionsList
              value={selectedOptions}
              onClick={handleOptionClick}
              reverse
              alignToStart
            />
          )}
        </>
      </SelectionBody>

      {isOpenSelections && (
        <SelectionModal
          emoji={emoji}
          popupRef={popupRef}
          title={title as TitleT}
          optionsList={optionsList}
          description={inputDescription}
          placeholder={inputPlaceholder}
          onChange={onChange}
        />
      )}
    </InputsWrapper>
  )
}

export default SelectionInput
