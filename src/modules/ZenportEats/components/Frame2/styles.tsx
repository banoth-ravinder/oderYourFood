import styled, { css } from 'styled-components';

export const ContainerStyle = styled.div`
  margin: 2rem 0;
  display: flex;

  & > *:first-child {
    margin-right: 1.5rem;
  }
`;

interface SectionProps {
  $padding?: boolean;
  $width: number;
  $marginBottom?: number;
}

export const SectionStyle = styled.div<SectionProps>`
  display: flex;
  flex-direction: column;
  border: 1px solid #cccccc;
  margin-bottom: ${({ $marginBottom }) => $marginBottom || 20}px !important;
  ${({ $padding }) =>
    $padding &&
    css`
      padding: 0 8px 8px 8px;
    `}
  width: ${({ $width }) => $width}px;
  height: 100%;
`;

export const FoodSelectionContainer = styled.div`
  padding: 0 8px 8px 8px;
`;
