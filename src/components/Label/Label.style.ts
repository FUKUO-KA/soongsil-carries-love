import styled from 'styled-components';
import { getFontStyle } from '@/styles/typo';
import colors from '@/styles/color';

export const LabelWrapper = styled.div<{ size: 'small' | 'medium' | 'large' }>`
  display: inline-block;
  align-items: center;
  justify-content: center;
  width: fit-content;
  min-width: min-content;

  background-color: ${colors.orange};
  padding: ${({ size }) =>
    size === 'small' ? '3px 12px' : size === 'medium' ? '3px 20px' : '12px 24px'};
  border-radius: 9px;
`;

export const LabelText = styled.p`
  color: ${colors.white};
  ${getFontStyle('Caption2_B')}
  margin: 0;
`;
