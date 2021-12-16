import { Button as AntButton, ButtonProps } from 'antd';
import styled, { css } from 'styled-components';

import { MouseEventHandler } from 'react';

interface Props extends ButtonProps {
  $buttonType?: 'normal' | 'addPerson' | 'orderTotal' | 'foodSelection';
  children?: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

const StyledButton = styled(AntButton)<Props>`
  ${(props) => {
    switch (props.$buttonType) {
      case 'foodSelection':
        return css`
          width: 45px;
          height: 60px;
          background-color: #52c41a;
          border: 0;
          border-radius: 0;
          font-size: 28px;
          font-weight: 1000;

          & :hover,
          :focus {
            background-color: #52c41a;
          }
        `;
      case 'orderTotal':
        return css`
          width: 100%;
        `;
      case 'addPerson':
        return css`
          width: 70px;
          padding: 4px 0;
        `;
      default:
        return css`
          width: 216px;
        `;
    }
  }}
`;

const Button = ({ children, ...rest }: Props) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

export default Button;
