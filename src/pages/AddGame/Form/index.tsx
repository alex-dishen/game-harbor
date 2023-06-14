import { SecondaryHeader, Section } from 'pages/AddGame/Form/styles';
import TextInput from 'pages/AddGame/TextInput';
import Selection from 'pages/AddGame/Selection';
import TextArea from 'pages/AddGame/TextArea';
import { GameDetails } from '../constants';
import ButtonGroup from '../ButtonGroup';

const Form = () => (
  <form onSubmit={(e) => e.preventDefault()}>
    <Section>
      <SecondaryHeader>General information</SecondaryHeader>
      <TextInput type="text" title="Title" placeHolder="Add title" isRequired />
      <Selection
        type="file"
        isRequired
        title="Coverage image"
        placeholder="Add image"
        emoji="😔"
        description="No image = no pretty background"
      />
      <TextArea title="About" placeHolder="Add game description" />
    </Section>

    <Section>
      <TextInput type="date" title="Release date" isRequired />
      {GameDetails.map(
        ({ title, placeholder, emoji, description, isRequired }) => (
          <Selection
            type="selection"
            title={title}
            placeholder={placeholder}
            emoji={emoji}
            description={description}
            isRequired={isRequired}
          />
        )
      )}
      <TextInput type="url" title="Website" placeHolder="Website URL" />
    </Section>

    <ButtonGroup />
  </form>
);

export default Form;
