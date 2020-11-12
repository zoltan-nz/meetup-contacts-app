import { FC } from 'react';
import styled, { css, keyframes } from 'styled-components';

interface ButtonProps {
  whatever?: boolean;
  secondary?: boolean;
  size?: number;
}

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Button = styled.button<ButtonProps>`
  background: ${props => props.whatever ? "palevioletred" : "white"};
  color: ${props => props.whatever ? "white" : "palevioletred"};

  font-size: ${props => `${props.size}em` || '1em'};
  animation: ${rotate} ${props => props.size}s linear infinite;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

const animation = css`
  animation: ${rotate} 2s linear infinite;
`
export default Button;

export {
  TomatoButton
}
