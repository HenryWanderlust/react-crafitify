import React, { ReactNode, ButtonHTMLAttributes } from 'react';
import styled, { keyframes } from 'styled-components';

const shakeAnimation = keyframes`
  0% {
    transform: translate(0);
  }

  20% {
    transform: translate(-2px, 2px);
  }

  40% {
    transform: translate(-2px, -2px);
  }

  60% {
    transform: translate(2px, 2px);
  }

  80% {
    transform: translate(2px, -2px);
  }

  100% {
    transform: translate(0);
  }
`;

const StyledButton = styled.button`
  height: 3em;
  width: 8em;
  border: none;
  border-radius: 10em;
  background: #016DD9;
  font-size: 17px;
  color: #ffffff;
  font-family: inherit;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    animation: ${shakeAnimation} 0.3s linear infinite both;
  }
`;

interface ShakeButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

const ShakeButton: React.FC<ShakeButtonProps> = ({ children,className, ...rest }) => {
  return <StyledButton className={className} {...rest}>{children}</StyledButton>;
};

export default ShakeButton;
