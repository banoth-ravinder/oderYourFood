import styled from 'styled-components';

export const OrderDetailContainerStyle = styled.div<{ $selected: boolean }>`
  border: ${({ $selected }) => ($selected ? '1px solid blue' : '1px solid #cccccc')};
  & :hover {
    cursor: pointer;
  }
`;

export const OrderDetailHeaderStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f1f1f1;
  padding: 5px;
`;

export const OrderDetailItemStyle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4px 8px;
`;
