import { FormProps } from 'pages/AddGame/Form/types';
import { SecondaryHeader, Section } from 'pages/AddGame/Form/styles';
import TextInput from 'pages/AddGame/TextInput';
import Selection from 'pages/AddGame/Selection';
import TextArea from 'pages/AddGame/TextArea';
import { GameDetails } from '../constants';
import ButtonGroup from '../ButtonGroup';

const Form = ({}: FormProps) => (
  <form onSubmit={(e) => e.preventDefault()}>
    <Section>
      <SecondaryHeader>General information</SecondaryHeader>
      <TextInput title="Title" placeHolder="Add title" isRequired />
      <Selection
        title="Coverage image"
        placeholder="Add image"
        emoji="☹️"
        description="No image = no pretty background"
      />
      <TextArea title="About" placeHolder="Add game description" />
    </Section>

    <Section>
      {GameDetails.map(
        ({ title, placeholder, emoji, description, isRequired }) => (
          <Selection
            title={title}
            placeholder={placeholder}
            emoji={emoji}
            description={description}
            isRequired={isRequired}
          />
        )
      )}
      <TextInput title="Website" placeHolder="Website URL" />
    </Section>

    <ButtonGroup />
  </form>
);

export default Form;
