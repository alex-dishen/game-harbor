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
  options,
}: SelectionProps) => {
  const {
    selectedImage,
    isOpenSelections,
    popupRef,
    setSelectedImage,
    setIsOpenSelections,
  } = useSelectionInput();

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

        {selectedImage ? (
          <Image src={selectedImage} />
        ) : (
          <DescriptionHolder>
            <p>{emoji}</p>
            <p>{description}</p>
          </DescriptionHolder>
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
