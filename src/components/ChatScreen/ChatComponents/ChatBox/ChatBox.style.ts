import colors from '@/styles/color';
import { getFontStyle } from '@/styles/typo';
import styled, { css } from 'styled-components';

interface isMineProps {
  $isOwnMsg: boolean;
}

export const StyledChatBoxContainer = styled.div<isMineProps>`
  display: flex;
  flex-direction: ${(props) => (props.$isOwnMsg ? 'row-reverse' : 'row')};
  gap: 6px;
`;

export const StyledProfileImg = styled.img`
  width: 40px;
  height: 40px;
`;

export const StyledNameBubbleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const StyledName = styled.div<isMineProps>`
  width: fit-content;
  height: 21px;
  padding: 1.5px 10px;
  background-color: ${colors.orange};
  ${getFontStyle('Caption2')};
  color: #fcf3cc;
  text-align: center;
  border-radius: 9px;
  align-self: ${(props) => (props.$isOwnMsg ? 'flex-end' : 'flex-start')};
`;

export const StyledChatBubble = styled.div<isMineProps>`
  max-width: 100%;
  padding: 12px 16px;
  border-radius: ${(props) => (props.$isOwnMsg ? '12px 0px 12px 12px' : '0px 12px 12px 12px')};
  font-size: 14px;
  line-height: 1.5;
  word-break: break-word;
  background-color: ${colors.white};
  color: black;
  align-self: ${(props) => (props.$isOwnMsg ? 'flex-end' : 'flex-start')};
`;
