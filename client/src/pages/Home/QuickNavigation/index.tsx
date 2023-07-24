import useQuickNavigation from 'pages/Home/QuickNavigation/useQuickNavigation'
import places from 'pages/Home/QuickNavigation/constants'
import {
  Navigation,
  Header,
  Links,
  StyledLink,
} from 'pages/Home/QuickNavigation/styles'

const QuickNavigation = () => {
  const { handleOnClick } = useQuickNavigation()

  return (
    <Navigation>
      <Header>Quick Navigation</Header>
      <Links>
        {places.map(({ id, place, name, icon }) => (
          <li key={id}>
            <StyledLink to={place} onClick={e => handleOnClick(e, name)}>
              {icon}
              {name}
            </StyledLink>
          </li>
        ))}
      </Links>
    </Navigation>
  )
}

export default QuickNavigation
