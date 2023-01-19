import styled from 'styled-components';

interface OptionsHolderProps {
  isChangeNavbar?: boolean;
}

const Option = styled.div``;

const MoreOptions = styled.div`
  position: relative;
`;

const OptionsHolder = styled.div<OptionsHolderProps>`
  position: absolute;
  z-index: 1;
  top: -15px;
  left: ${(props) => (props.isChangeNavbar ? '' : '100px')};
  right: ${(props) => (props.isChangeNavbar ? '130px' : '')};
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 10px;
  width: max-content;
  background-color: white;
  color: black;
  border-radius: 10px;
  box-shadow: 0px 5px 15px rgb(111, 110, 110), 0px 0px 5px rgb(111, 110, 110);

  hr {
    margin: 0;
    width: 100%;
  }

  span {
    text-align: center;
    padding: 3px 8px;
    color: rgb(23, 179, 12);
  }
`;

const AdditionalOption = styled.div`
  display: flex;
  font-size: 15px;
  padding: 3px 8px;
  border-radius: 7px;
  transition: 0.2s;

  &:hover {
    background-color: rgb(229, 229, 229);
  }
`;

export { Option, MoreOptions, OptionsHolder, AdditionalOption };
