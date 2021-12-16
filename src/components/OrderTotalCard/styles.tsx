import styled from 'styled-components';

export const ContainerStyle = styled.div`
  border: 1px solid #cccccc;
  padding: 8px;
`;

export const OrderTotalTableStyle = styled.table`
  > tbody {
    > tr {
      > td {
        white-space: nowrap;
      }

      > td:first-child {
        padding-right: 10px;
      }
    }
  }
`;
