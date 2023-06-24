import { motion } from 'framer-motion'
import styled, { CSSObject, css } from 'styled-components'
import { aside, fullScreen } from 'pages/Games/Sidebar/constants'
import { IconHolderTypes, StyledSidebarTypes } from 'pages/Games/Sidebar/types'

const CustomMotionAside = ({
  isChangeSidebar,
  ...rest
}: StyledSidebarTypes) => <motion.aside {...rest} />

export const StyledSidebar = styled(CustomMotionAside)<StyledSidebarTypes>(
  ({ isChangeSidebar }) => css`
    ${isChangeSidebar ? (fullScreen as CSSObject) : (aside as CSSObject)}
  `,
)

export const CategoryHolder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const Header = styled.h3(
  ({ theme }) => css`
    font-size: ${theme.fontSizes.lg};
    font-weight: 600;
    margin: 0;
  `,
)

export const Filter = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  cursor: pointer;

  &:hover {
    div {
      background-color: white;
    }

    svg {
      fill: black;
    }
  }
`

export const IconHolder = styled.div<IconHolderTypes>(
  ({ isHighlight, theme }) => css`
    /* z-index is needed here to make the function
      get text content of its parent  */
    z-index: -1;
    display: flex;
    height: 38px;
    width: 38px;
    padding: 8px;
    background-color: ${isHighlight ? 'white' : theme.colors.black[200]};
    border-radius: 8px;
    transition: 0.5s;

    svg {
      fill: ${isHighlight ? 'black' : 'white'};
      transition: 0.5s;
    }
  `,
)
