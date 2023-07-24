import styled from 'styled-components'

export const SelectionModuleWrapper = styled.div`
  z-index: 2;
  position: absolute;
  top: -10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 12px 20px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  backdrop-filter: blur(15px);
  box-shadow: 0px 0px 5px 2px rgba(97, 189, 255, 0.5);

  h3 {
    margin: 0;
  }
`
