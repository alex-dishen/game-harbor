import styled, { css } from 'styled-components';
import { StyledNavigationTypes } from 'components/Navigation/types';
import { InputWrapper } from 'components/Header/styles';

export const StyledNavigation = styled.div<StyledNavigationTypes>(
  ({ darkenImages }) => css`
    display: flex;
    gap: 15px;
    align-items: center;

    svg {
      fill: ${darkenImages ? 'black' : 'white'};
    }
  `
);

export const CartWrapper = styled(InputWrapper)`
  position: relative;
  flex-shrink: 0;
  width: fit-content;
  background-color: transparent;
  cursor: pointer;

  transition: 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Circle = styled.div`
  position: absolute;
  top: -8px;
  right: -8px;
  height: 6px;
  width: 6px;
  background-color: #18b0ab;
  border-radius: 50%;
`;
