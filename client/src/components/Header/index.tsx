import { Link } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import useHeader from 'components/Header/useHeader'
import Cart from 'components/Cart'
import SearchGames from 'components/Search'
import Navigation from 'components/Navigation'
import {
  HeaderWrapper,
  LogoWrapper,
  Logo,
  InputWrapper,
  Input,
  MagnifyGlass,
} from 'components/Header/styles'
import logo from 'assets/images/logo.png'
import { PATHS } from '../../constants'

const Header = () => {
  const {
    scrollDirection,
    isModifyHeader,
    isChangeSidebar,
    isHideSidebar,
    inputControls,
    isOpenCart,
    inputWrapperRef,
    isOpenSearchGames,
    handleOnChange,
    handleKeyDown,
    handleOnFocus,
    handleSearchedGames,
  } = useHeader()

  return (
    <>
      <HeaderWrapper
        scrollDirection={scrollDirection}
        isModifyHeader={isModifyHeader}
        isChangeSidebar={isChangeSidebar}
        isHideSidebar={isHideSidebar}
      >
        <LogoWrapper as={Link} to={PATHS.home}>
          <Logo src={logo} alt="Logo" />
          <div>Game Harbor</div>
        </LogoWrapper>
        <InputWrapper
          ref={inputWrapperRef}
          initial={{ maxWidth: 300 }}
          animate={inputControls}
        >
          <Input
            onFocus={handleOnFocus}
            onChange={handleOnChange}
            onKeyDown={handleKeyDown}
          />
          <MagnifyGlass onClick={handleSearchedGames} />

          {isOpenSearchGames && <SearchGames />}
        </InputWrapper>
        <Navigation />
      </HeaderWrapper>
      <AnimatePresence>{isOpenCart && <Cart />}</AnimatePresence>
    </>
  )
}

export default Header
