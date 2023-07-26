import styled, { css } from 'styled-components'

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SecondaryHeader = styled.h2(
  ({ theme }) => css`
    margin: 0;
    font-size: ${theme.fontSizes.lg};
    font-weight: 500;
    margin-bottom: -15px;
  `,
)

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 45px;
  width: clamp(340px, 80vw, 550px);
  margin-bottom: 40px;
  padding: 40px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  backdrop-filter: blur(20px);
`

export const SubmitSection = styled.div`
  position: sticky;
  bottom: 20px;
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-bottom: 50px;
`
