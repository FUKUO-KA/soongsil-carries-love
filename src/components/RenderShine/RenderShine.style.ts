import { keyframes } from '@emotion/react';
import styled from 'styled-components';

interface ShineProps {
  $width: string;
  $top?: string;
  $bottom?: string;
  $left?: string;
  $right?: string;
}

const shineAnimation = () => keyframes`
  0%, 100% {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(30deg) scale(1.8);
  }
  100% {
    transform: rotate(0deg) scale(1);
  }
`;

export const StyledShine = styled.img<ShineProps>`
  position: relative;
  width: ${({ $width }) => $width};
  top: ${({ $top }) => $top};
  bottom: ${({ $bottom }) => $bottom};
  left: ${({ $left }) => $left};
  right: ${({ $right }) => $right};
  animation: ${shineAnimation} 3s ease-in-out infinite;
`;

export const StyledShineContainer = styled.div`
  width: calc(100%-48px);
  position: absolute;
  z-index: -1;
`;
