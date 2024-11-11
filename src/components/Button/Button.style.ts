import colors from '@/styles/color';
import styled from 'styled-components';
import { getFontStyle } from '../../styles/typo';
import { ButtonSizeType } from '@/constants/button.constant';

interface StyledButtonProps {
  $size: ButtonSizeType;
}

const sizes = {
  SMALL: 72,
  MEDIUM: 149,
  BIG: 279,
};

export const StyledButton = styled.button<StyledButtonProps>`
  padding: 0px;
  width: ${({ $size }) => `${sizes[$size]}px`};
  height: ${({ $size }) => ($size === 'SMALL' ? 23 : 38)}px;
  background: ${colors.logo_color_2};
  border-radius: 11px;
  ${({ $size }) => ($size === 'SMALL' ? getFontStyle('Caption2') : getFontStyle('Header5'))};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;

  &:hover {
    border: none;
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
    color: ${colors.white};
    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.18) 77.63%,
        rgba(255, 255, 255, 0.6) 100%
      ),
      linear-gradient(0deg, rgba(252, 214, 44, 0.5) 0%, rgba(255, 146, 68, 0.5) 100%);
  }
`;
