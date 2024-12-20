import { getFontStyle } from '@/styles/typo';
import styled from 'styled-components';
import colors from '@/styles/color';

export const StyledMemverList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const StyledProfileName = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
`;

export const StyledProfile = styled.img`
  width: 40px;
  height: 40px;
`;

export const StyledMemberName = styled.div`
  ${getFontStyle('Caption2_B')};
  color: ${colors.secondary_text};
`;

export const StyledContactBtn = styled.button`
  width: 75px;
  height: 26px;
  border-radius: 16px;
  background-color: ${colors.orange};
  ${getFontStyle('Caption2_B')};
  color: #fcf3cc;
  line-height: 0.7;
`;
