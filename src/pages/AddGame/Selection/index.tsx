import { useState } from 'react';
import { SelectionProps } from 'pages/AddGame/Selection/types';
import {
  SelectionBody,
  AddButton,
  DescriptionHolder,
  Image,
} from 'pages/AddGame/Selection/styles';
import { InputsWrapper, Star } from 'styles';
import { ReactComponent as Plus } from 'assets/images/plus_without_frame.svg';
import { ReactComponent as Recycle } from 'assets/images/recycle.svg';
import { handleImageUpload } from './helpers';

const Selection = ({
  type,
  title,
  description,
  emoji,
  icon = <Plus />,
  placeholder,
  isRequired,
}: SelectionProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
          <AddButton type="button">
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
    </InputsWrapper>
  );
};

export default Selection;
