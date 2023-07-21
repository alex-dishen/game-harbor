import { OptionsListProps } from 'pages/AddGame/OptionsList/types'
import { OptionsHolder, ListOption } from 'pages/AddGame/OptionsList/styles'

const OptionsList = ({
  value,
  onClick,
  reverse,
  alignToStart,
}: OptionsListProps) => (
  <OptionsHolder alignToStart={alignToStart}>
    {value?.map(item => (
      <ListOption key={item.id} onClick={() => onClick(item, reverse)}>
        {item.icon}
        {item.name}
      </ListOption>
    ))}
  </OptionsHolder>
)

export default OptionsList
