import colors from '@/styles/color';
import { getFontStyle } from '@/styles/typo';
import styled from 'styled-components';

export const StyledChatInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
  height: 52px;
  background-color: ${colors.brown};
  padding: 11px 10px;
`;

export const StyledChatInput = styled.textarea`
  width: 100%;
  height: 29px;
  background-color: ${colors.white};
  padding: 8px 10px;
  ${getFontStyle('Caption2_B')};
  color: ${colors.secondary_text};
  border-radius: 9px;
  border: none;
  resize: none;

  &:focus {
    outline: none;
  }
`;

export const StyledSubmitMessageBtn = styled.button`
  width: 60px;
  height: 29px;
  border-radius: 9px;
  background-color: ${colors.orange};
  ${getFontStyle('Caption2')};
  color: ${colors.white};
  &:focus {
    outline: none;
  }

  cursor: pointer;
`;
