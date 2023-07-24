export type TextAreaProps = {
  title: string
  placeHolder: string
  required?: boolean
  onChange: (event: string | React.ChangeEvent<Element>) => void
}
