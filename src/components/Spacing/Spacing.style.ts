import { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface SpacingProps extends HTMLAttributes<HTMLDivElement> {
  direction: 'horizontal' | 'vertical';
  size: number;
}

export const StyledSpacing = styled.div<SpacingProps>`
  width: ${({ direction, size }) => (direction === 'horizontal' ? `${size}px` : 'auto')};
  height: ${({ direction, size }) => (direction === 'vertical' ? `${size}px` : 'auto')};
`;
