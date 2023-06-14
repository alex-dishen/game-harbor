import { SelectionProps } from 'pages/AddGame/Selection/types';
import {
  SelectionBody,
  AddButton,
  DescriptionHolder,
} from 'pages/AddGame/Selection/styles';
import { InputsWrapper, Star } from 'styles';

const Selection = ({
  title,
  description,
  emoji,
  placeholder,
  isRequired,
}: SelectionProps) => (
  <InputsWrapper>
    <p>
      {title}
      {isRequired ? <Star>*</Star> : ''}
    </p>
    <SelectionBody>
      <AddButton>{placeholder}</AddButton>
      <DescriptionHolder>
        <p>{emoji}</p>
        <p>{description}</p>
      </DescriptionHolder>
    </SelectionBody>
  </InputsWrapper>
);

export default Selection;
