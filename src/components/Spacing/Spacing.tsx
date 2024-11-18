import { HTMLAttributes, memo } from 'react';
import { StyledSpacing } from './Spacing.style';
import { DEFAULT_DIRECTION, Direction } from '@/constants/spacing.constant';

interface SpacingProps extends HTMLAttributes<HTMLDivElement> {
  direction: Direction;
  size: number;
}

export const Spacing = ({ direction = DEFAULT_DIRECTION, size, ...props }: SpacingProps) => {
  return <StyledSpacing direction={direction} size={size} {...props} />;
};
