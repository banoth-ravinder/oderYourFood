import styled from 'styled-components';

export const ContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30%;

  & > * {
    margin-bottom: 1.5rem;
  }
`;

export const WelcomeStyle = styled.div`
  font-size: 28px;
  font-weight: 600;
`;

export const QuestionStyle = styled.div`
  width: 290px;
  font-size: 18px;
  font-family: 'Nunito Sans';
  font-weight: 500;
  text-align: center;
  line-height: 24px;
`;
