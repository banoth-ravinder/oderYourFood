import { Typography } from 'antd';
import styled from 'styled-components';

export const FoodSelectionCardStyle = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #cccccc;
`;

export const FoodSelectionTitleStyle = styled(Typography)`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const FoodSelectionItemStyle = styled(Typography)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding-left: 8px;
`;
