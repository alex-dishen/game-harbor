import { useTheme } from 'styled-components'
import { AnimatePresence } from 'framer-motion'
import { CircularProgress } from 'react-cssfx-loading'
import useGames from 'pages/Games/useGames'
import Sidebar from 'pages/Games/Sidebar'
import Top from 'pages/Games/Top'
import GameList from 'pages/Games/GameList'
import {
  StyledGamePage,
  MenuHolder,
  Content,
  Overflow,
} from 'pages/Games/styles'
import { ReactComponent as Menu } from 'assets/images/menu.svg'
import { ReactComponent as Close } from 'assets/images/close.svg'
import Response from 'components/Response'

const Games = () => {
  const { games, isShowMenu, isHideSidebar, responseMessage, handleOnClick } =
    useGames()
  const theme = useTheme()

  return (
    <StyledGamePage
      // The upper case is used to prevent games from bing shown in DOM
      GAMES={games}
      initial={{ opacity: 0, x: 25 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      exit={{ opacity: 0, x: 25 }}
    >
      {responseMessage && <Response />}
      {games.length === 0 ? (
        <CircularProgress
          color={theme.colors.teal[100]}
          height="100px"
          width="100px"
          duration="2.5s"
        />
      ) : (
        <>
          {isShowMenu && (
            <>
              <Overflow isHideSidebar={isHideSidebar} />
              <MenuHolder onClick={handleOnClick}>
                {isHideSidebar ? <Menu /> : <Close />}
              </MenuHolder>
            </>
          )}
          <AnimatePresence initial={false}>
            {!isHideSidebar && <Sidebar />}
          </AnimatePresence>
          <Content>
            <Top />
            <GameList />
          </Content>
        </>
      )}
    </StyledGamePage>
  )
}

export default Games
