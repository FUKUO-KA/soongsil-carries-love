import colors from '@/styles/color';
import { getFontStyle } from '@/styles/typo';
import styled from 'styled-components';

export const StyledInfoText = styled.div`
  color: ${colors.secondary_text};
  text-align: center;
  font-family: 'Pretendard Variable';
  font-size: 6px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const StyledCertificateBtnContainer = styled.div`
  padding: 22px;
  position: absolute;
  float: right;
  right: 16px;
`;

export const StyledTimerContainer = styled.div`
  position: absolute;
  float: right;
  right: 44px;
  top: 165px;
`;

export const StyledTimerText = styled.span`
  width: fit-content;
  ${getFontStyle('Caption2_B')}
  color: ${colors.sub_1};
`;
