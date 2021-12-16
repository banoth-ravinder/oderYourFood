import styled, { css } from 'styled-components';

export const ContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10%;

  & > * {
    margin-bottom: 1.5rem;
  }
`;

export const SubTextStyle = styled.span<{ $noMargin?: boolean }>`
  font-family: 'Nunito Sans';
  font-size: 18px;
  font-weight: 600;

  ${({ $noMargin }) =>
    $noMargin &&
    css`
      margin-bottom: 0;
    `}
`;
