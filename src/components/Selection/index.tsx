import { useSelection } from 'components/Selection/useSelection';
import { SelectionProps } from 'components/Selection/types';
import {
  SelectionBody,
  AddButton,
  DescriptionHolder,
} from 'components/Selection/styles';
import { InputsWrapper } from 'styles';

const Selection = ({
  title,
  description,
  emoji,
  placeholder,
  isRequired,
}: SelectionProps) => {
  useSelection();

  return (
    <InputsWrapper>
      <p>
        {title} {isRequired ? '*' : ''}
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
};

export default Selection;
