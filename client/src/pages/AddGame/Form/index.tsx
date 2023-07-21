import { Controller, FormProvider } from 'react-hook-form'
import Input from 'pages/AddGame/Input'
import SelectionInput from 'pages/AddGame/SelectionInput'
import TextArea from 'pages/AddGame/TextArea'
import ButtonGroup from 'pages/AddGame/ButtonGroup'
import { GameDetails } from 'pages/AddGame/constants'
import { SecondaryHeader, Section, StyledForm } from 'pages/AddGame/Form/styles'
import { UseCustomForm } from './useCustomForm'

const Form = () => {
  const { methods, control, handleSubmit, onSubmit, resetForm } =
    UseCustomForm()

  return (
    <FormProvider {...methods}>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Section>
          <SecondaryHeader>General information</SecondaryHeader>
          <Input
            required
            name="name"
            type="text"
            title="Title"
            placeHolder="Add title"
          />
          <Input
            required
            name="background_image"
            type="url"
            title="Coverage Image"
            placeHolder="Add a link to the picture"
          />

          <TextArea
            title="About"
            name="description_raw"
            placeHolder="Add game description"
          />
        </Section>

        <Section>
          <Input required type="date" name="released" title="Release date" />
          {GameDetails.map(detail => (
            <Controller
              key={detail.id}
              control={control}
              name={detail.name}
              rules={{ required: detail.isRequired }}
              render={({ field: { onChange } }) => (
                <SelectionInput
                  title={detail.title}
                  emoji={detail.emoji}
                  isRequired={detail.isRequired}
                  optionsList={detail.optionsList}
                  placeholder={detail.placeholder}
                  description={detail.description}
                  inputDescription={detail.inputDescription}
                  inputPlaceholder={detail.inputPlaceholder}
                  onChange={onChange}
                />
              )}
            />
          ))}
          <Input
            type="url"
            name="website"
            title="Website"
            placeHolder="Website URL"
          />
        </Section>

        <ButtonGroup resetForm={resetForm} />
      </StyledForm>
    </FormProvider>
  )
}

export default Form
