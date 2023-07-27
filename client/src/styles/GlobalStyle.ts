import * as styled from 'styled-components'

const GlobalStyle = styled.createGlobalStyle(
  ({ theme }) => styled.css`
    body {
      font-family: 'GT Walsheim Pro';
      background-color: ${theme.colors.black[250]};

      *::-webkit-scrollbar {
        display: none;
      }
    }

    #root {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
  `,
)

export default GlobalStyle
