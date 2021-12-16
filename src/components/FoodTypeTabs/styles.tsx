import styled, { css } from 'styled-components';

import { Tabs } from 'antd';

export const TabPaneImageStyle = styled.span`
  display: flex;
  align-items: center;
  & > span {
    margin-right: 5px !important;
  }
`;

export const TabsStyle = styled(Tabs)<{ $isDisabled?: boolean }>`
  ${({ $isDisabled }) =>
    $isDisabled &&
    css`
      .ant-tabs-ink-bar {
        background-color: transparent;
      }
      .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
        text-shadow: none;
      }
    `}
`;
