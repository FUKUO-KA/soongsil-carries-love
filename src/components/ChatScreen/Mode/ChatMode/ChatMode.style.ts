import { getFontStyle } from '@/styles/typo';
import styled from 'styled-components';
import dashedLine from '@/assets/icons/dashedLine.svg';

export const StyledChatContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0 10px;
  width: 100%;
`;

export const StyledChatHeader = styled.div`
  display: flex;
  flex-direction: row;
  gap: 26px;
  justify-content: space-between;
`;

export const StyledTitle = styled.div`
  width: 237px;
  height: 21px;
  background-color: #fea155;
  ${getFontStyle('Caption2')};
  color: #fcf3cc;
  text-align: center;
  border-radius: 9px;
  padding-top: 1px;
  margin-left: 14px;
  overflow: hidden; /* 추가 */
  text-overflow: ellipsis; /* 추가 */
  white-space: nowrap;
`;

export const StyledHamburger = styled.img`
  width: 21px;
  margin-right: 12px;
  cursor: pointer;
`;

export const StyledDottedLine = styled.div`
  width: 95%;
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
`;
