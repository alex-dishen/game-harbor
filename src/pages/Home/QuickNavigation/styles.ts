import styled from 'styled-components';

const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  width: 234px;
  padding: 15px 25px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 30px;

  h3 {
    margin: 0;
    color: white;
    font-size: 22px;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    gap: 8px;
    width: 100%;
    padding: 10px 0;
    background-color: white;
    color: black;
    border-radius: 16px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background-color: rgb(106, 190, 187);
      transform: scale(1.05);
    }

    &:active {
      transform: scale(1);
    }
  }

  svg {
    height: 20px;
    width: 20px;
  }
`;

export default Navigation;
