import { OptionsListProps } from 'pages/AddGame/OptionsList/types';
import { OptionsHolder, ListOption } from 'pages/AddGame/OptionsList/styles';

const OptionsList = ({ value, reverse, onClick }: OptionsListProps) => (
  <OptionsHolder>
    {value?.map((item) => (
      <ListOption key={item.key} onClick={() => onClick(item, reverse)}>
        {item.icon}
        {item.name}
      </ListOption>
    ))}
  </OptionsHolder>
);

export default OptionsList;
