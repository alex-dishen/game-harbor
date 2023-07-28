import { Controller, FormProvider } from 'react-hook-form'
import { CircularProgress } from 'react-cssfx-loading'
import { useTheme } from 'styled-components'
import Input from 'pages/AddGame/Input'
import SelectionInput from 'pages/AddGame/SelectionInput'
import TextArea from 'pages/AddGame/TextArea'
import ButtonGroup from 'pages/AddGame/ButtonGroup'
import { UseCustomForm } from 'pages/AddGame/Form/useCustomForm'
import { GameDetails } from 'pages/AddGame/constants'
import {
  SecondaryHeader,
  Section,
  StyledForm,
  SubmitSection,
  Blur,
} from 'pages/AddGame/Form/styles'

const Form = () => {
  const theme = useTheme()
  const { methods, control, showLoader, handleSubmit, onSubmit, resetForm } =
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

          <Controller
            control={control}
            name="description_raw"
            rules={{ required: true }}
            render={({ field: { onChange } }) => (
              <TextArea
                required
                title="About"
                placeHolder="Add game description"
                onChange={onChange}
              />
            )}
          />
          <Blur />
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
          <Blur />
        </Section>

        <SubmitSection>
          {showLoader ? (
            <CircularProgress height="42px" color={theme.colors.blue[150]} />
          ) : (
            <ButtonGroup resetForm={resetForm} />
          )}
        </SubmitSection>
      </StyledForm>
    </FormProvider>
  )
}

export default Form
