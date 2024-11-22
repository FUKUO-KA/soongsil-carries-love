import colors from '@/styles/color';
import { getFontStyle } from '@/styles/typo';
import styled, { css } from 'styled-components';

interface isMineProps {
  $isMine: boolean;
}

export const StyledChatBoxContainer = styled.div<isMineProps>`
  display: flex;
  flex-direction: ${(props) => (props.$isMine ? 'row-reverse' : 'row')};
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
  background-color: #fea155;
  ${getFontStyle('Caption2')};
  color: #fcf3cc;
  text-align: center;
  border-radius: 9px;
  align-self: ${(props) => (props.$isMine ? 'flex-end' : 'flex-start')};
`;

export const StyledChatBubble = styled.div<isMineProps>`
  max-width: 90%;
  padding: 12px 16px;
  border-radius: 12px;
  font-size: 14px;
  line-height: 1.5;
  word-wrap: break-word;
  ${(props) =>
    props.$isMine
      ? css`
          align-self: flex-end;
          background-color: ${colors.white};
          color: black;
          border-top-right-radius: 0;
        `
      : css`
          align-self: flex-start;
          background-color: ${colors.white};
          color: black;
          border-top-left-radius: 0;
        `}
`;
