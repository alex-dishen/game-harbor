import { FormProps } from 'components/Form/types';
import { SecondaryHeader, StyledForm } from 'components/Form/styles';
import TextInput from 'components/TextInput';
import Selection from 'components/Selection';
import TextArea from 'components/TextArea';

const Form = ({}: FormProps) => (
  <StyledForm onSubmit={(e) => e.preventDefault()}>
    <SecondaryHeader>General information</SecondaryHeader>
    <TextInput title="Title" placeHolder="Add title" isRequired type="text" />
    <Selection
      title="Coverage image"
      placeholder="Add image"
      emoji="☹️"
      description="No image = no pretty background"
    />
    <TextArea title="About" placeHolder="Add game description" />
  </StyledForm>
);

export default Form;
