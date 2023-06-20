export type InputProps = {
  type: string
  title: string
  placeHolder?: string
  isRequired?: boolean
  icon?: JSX.Element
  setAction?: (a: string) => void
  onClick?: () => void
}
