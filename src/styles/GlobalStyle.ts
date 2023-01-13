import * as styled from 'styled-components';

const GlobalStyle = styled.createGlobalStyle`
  body {
    font-family: 'GT Walsheim Pro';
    background-color: rgb(15, 16, 17);
  }

  #root {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export default GlobalStyle;
