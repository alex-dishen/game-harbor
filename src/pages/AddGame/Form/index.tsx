import Input from 'pages/AddGame/Input'
import SelectionInput from 'pages/AddGame/SelectionInput'
import TextArea from 'pages/AddGame/TextArea'
import ButtonGroup from 'pages/AddGame/ButtonGroup'
import { GameDetails } from 'pages/AddGame/constants'
import { SecondaryHeader, Section } from 'pages/AddGame/Form/styles'

const Form = () => (
  <form onSubmit={e => e.preventDefault()}>
    <Section>
      <SecondaryHeader>General information</SecondaryHeader>
      <Input type="text" title="Title" placeHolder="Add title" isRequired />
      <SelectionInput
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
      <Input type="date" title="Release date" isRequired />
      {GameDetails.map(detail => (
        <SelectionInput
          type="selection"
          title={detail.title}
          placeholder={detail.placeholder}
          emoji={detail.emoji}
          description={detail.description}
          isRequired={detail.isRequired}
          inputDescription={detail.inputDescription}
          inputPlaceholder={detail.inputPlaceholder}
          optionsList={detail.optionsList}
        />
      ))}
      <Input type="url" title="Website" placeHolder="Website URL" />
    </Section>

    <ButtonGroup />
  </form>
)

export default Form
