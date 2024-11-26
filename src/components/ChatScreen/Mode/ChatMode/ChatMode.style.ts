import { getFontStyle } from '@/styles/typo';
import styled from 'styled-components';
import dashedLine from '@/assets/icons/dashedLine.svg';
import colors from '@/styles/color';

export const StyledChatContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0 10px;
`;

export const StyledChatHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledTitle = styled.div`
  width: 237px;
  height: 21px;
  background-color: ${colors.orange};
  ${getFontStyle('Caption2')};
  color: #fcf3cc;
  text-align: center;
  border-radius: 9px;
  padding-top: 1px;
  margin-left: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const StyledHamburger = styled.img`
  width: 21px;
  margin-right: 12px;
  cursor: pointer;
`;

export const StyledDottedLine = styled.div`
  height: 2px;
  justify-self: center;
  border-width: 2px;
  border-style: solid;
  border-image: url(${dashedLine}) 1 fill repeat;
`;

export const StyledChatBoxList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;
  overflow-y: auto;
  max-height: 64vh;
  @media screen and (max-height: 850px) and (min-height: 751px) {
    max-height: 62vh;
  }

  @media screen and (max-height: 750px) {
    max-height: 58vh;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;
