import React, { ReactNode } from 'react';
import styled, { keyframes } from 'styled-components';

interface GradientBorderButtonProps {
  children: ReactNode;
  borderColor?: string;
  color?: string;
  hoverBackgroundColor?: string;
  hoverBoxShadow?: string;
  className?: string;
}

const moveBarAnimation = keyframes`
  0% {
    width: 0;
  }

  1% {
    border: 1px solid #00b4d8;
  }

  40% {
    width: 2rem;
  }

  99% {
    border: 1px solid #00b4d8;
    left: 99%;
  }

  100% {
    border: none;
    left: 100%;
    width: 0;
  }
`;

const StyledButton = styled.button<GradientBorderButtonProps>`
  background-color: transparent;
  border: 1px solid ${(props) => props.borderColor || '#00b4d8'};
  border-radius: 0.2rem;
  color: ${(props) => props.color || '#00b4d8'};
  font-weight: bold;
  padding: 0.8rem 1.5rem;
  position: relative;
  text-transform: uppercase;
  transition: ease-in 0.3s;

  &:hover, &:active, &:focus {
    background: ${(props) => props.hoverBackgroundColor || 'radial-gradient(#00b4d8, #4cc9f0)'};
    box-shadow: ${(props) => props.hoverBoxShadow || '0px 0px 0.3rem #00b4d8'};
    color: #001219;
  }

  &::before {
    bottom: -0.5rem;
    content: '';
    left: 0;
    position: absolute;
  }

  &::after {
    top: -0.5rem;
    content: '';
    left: 0;
    position: absolute;
  }

  &:hover::before {
    animation: ${moveBarAnimation} ease-in 0.6s forwards reverse;
  }

  &:hover::after {
    animation: ${moveBarAnimation} ease-in 0.6s forwards;
  }
`;

const GradientBorderButton: React.FC<GradientBorderButtonProps> = ({
  children,
  borderColor,
  color,
  hoverBackgroundColor,
  hoverBoxShadow,
  className,
}) => {
  return (
    <StyledButton
      borderColor={borderColor}
      color={color}
      hoverBackgroundColor={hoverBackgroundColor}
      hoverBoxShadow={hoverBoxShadow}
      className={className}
    >
      {children}
    </StyledButton>
  );
};

export default GradientBorderButton;
