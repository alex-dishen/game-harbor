import SelectionModule from 'pages/AddGame/SelectionModule';
import { handleImageUpload } from 'pages/AddGame/SelectionInput/helpers';
import { SelectionProps } from 'pages/AddGame/SelectionInput/types';
import {
  SelectionBody,
  AddButton,
  DescriptionHolder,
  Image,
} from 'pages/AddGame/SelectionInput/styles';
import { InputsWrapper, Star } from 'pages/AddGame/styles';
import { ReactComponent as Plus } from 'assets/images/plus_without_frame.svg';
import { ReactComponent as Recycle } from 'assets/images/recycle.svg';
import { useSelectionInput } from './useSelectionInput';
import { ListOption, OptionsHolder } from '../OptionsList/styles';
import OptionsList from '../OptionsList';
import { useSelectionModule } from '../SelectionModule/useSelectionModule';

const SelectionInput = ({
  type,
  title,
  description,
  emoji,
  icon = <Plus />,
  placeholder,
  isRequired,
  inputDescription,
  inputPlaceholder,
  options = [],
}: SelectionProps) => {
  const {
    selectedImage,
    isOpenSelections,
    popupRef,
    selectedOptions,
    setSelectedImage,
    setIsOpenSelections,
  } = useSelectionInput(options, title);

  const { handleOptionClick } = useSelectionModule(title);

  return (
    <InputsWrapper>
      <p>
        {title}
        {isRequired ? <Star>*</Star> : ''}
      </p>

      <SelectionBody>
        {type === 'file' ? (
          <>
            <AddButton as="label" htmlFor="file">
              <input
                id="file"
                type="file"
                style={{ display: 'none' }}
                onChange={(e) => handleImageUpload(e, setSelectedImage)}
              />
              {selectedImage ? <Recycle /> : icon}
              {selectedImage ? 'Replace image' : placeholder}
            </AddButton>
          </>
        ) : (
          <AddButton type="button" onClick={() => setIsOpenSelections(true)}>
            {icon} {placeholder}
          </AddButton>
        )}

        {type === 'file' && selectedImage ? (
          <Image src={selectedImage} />
        ) : (
          <>
            {selectedOptions.length === 0 ? (
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
        )}
      </SelectionBody>

      {isOpenSelections && (
        <SelectionModule
          popupRef={popupRef}
          title={title}
          emoji={emoji}
          description={inputDescription}
          placeholder={inputPlaceholder}
          options={options}
        />
      )}
    </InputsWrapper>
  );
};

export default SelectionInput;
