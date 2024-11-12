import colors from '@/styles/color';
import { getFontStyle } from '@/styles/typo';
import styled from 'styled-components';

export const StyledText = styled.div`
  ${getFontStyle('Caption1')};
  color: ${colors.sub_1};
`;
