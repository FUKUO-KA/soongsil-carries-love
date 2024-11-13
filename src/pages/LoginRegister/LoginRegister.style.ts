import colors from '@/styles/color';
import { getFontStyle } from '@/styles/typo';
import styled from 'styled-components';

export const StyledContainer = styled.div`
  margin-top: 138px;
  display: flex;
  flex-direction: column;
  gap: 36px;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const StyledLogo = styled.img`
  width: 247.453px;
`;
export const StyledTitlePinContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  gap: 5px;
  justify-content: center;
`;

interface TitlePinProps {
  $width: string;
}

export const StyledTitlePin = styled.div<TitlePinProps>`
  width: ${({ $width }) => ($width === 'LONG' ? '17px' : '6px')};
  height: 6px;
  background: ${colors.logo_color_2};
`;

export const StyledTitle = styled.div`
  ${getFontStyle('Header5')};
  color: ${colors.text};
`;
