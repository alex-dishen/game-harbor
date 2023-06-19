import * as styled from 'styled-components';

const GlobalStyle = styled.createGlobalStyle(
  ({ theme }) => styled.css`
    body {
      font-family: 'GT Walsheim Pro';
      background-color: ${theme.colors.black[250]};
    }

    #root {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
  `
);

export default GlobalStyle;
