import colors from '@/styles/color';
import { getFontStyle } from '@/styles/typo';
import styled from 'styled-components';

export const StyledSearchBarContainer = styled.div`
  position: relative;
  width: 279px;
  height: fit-content;
  margin-top: 14px;
`;

export const StyledSearchBar = styled.input<{ $isVisible: boolean }>`
  position: relative;
  width: 279px;
  height: 39px;
  padding-left: 43px;
  border-radius: ${(props) => (props.$isVisible ? '16px 16px 0 0' : '16px')};
  border-width: ${(props) => (props.$isVisible ? '1px 1px 0px 1px' : '1px')};
  border-style: solid;
  border-color: ${colors.box_border};
  background-color: transparent;
  color: ${colors.secondary_text};
  ${getFontStyle('Caption2_B')};

  &::placeholder {
    color: #c7c7c7;
  }

  &:focus {
    outline: none;
  }
`;

export const StyledIconImg = styled.img<{ $isList?: boolean }>`
  position: ${(props) => (props.$isList ? 'relative' : 'absolute')};
  width: 13px;
  height: 13px;
  top: ${(props) => (props.$isList ? 'auto' : '14px')};
  left: ${(props) => (props.$isList ? 'auto' : '15px')};
`;

export const StyledLine = styled.div<{ $isVisible: boolean }>`
  width: 250px;
  height: ${(props) => (props.$isVisible ? '1px' : '0')};
  margin: 0 auto;
  background-color: ${colors.box_border};
`;

export const StyledResultContainer = styled.div<{ $isVisible: boolean }>`
  position: relative;
  width: 100%;
  max-height: ${(props) => (props.$isVisible ? '275px' : '0')};
  color: ${colors.secondary_text};
  ${getFontStyle('Caption2_B')};
  overflow: hidden;
  background: white;
  border-width: 0px 1px 1px 1px;
  border-style: solid;
  border-color: ${colors.box_border};
  border-radius: ${(props) => (props.$isVisible ? '0 0 16px 16px' : '0')};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition:
    max-height 0.3s ease,
    opacity 0.3s ease;
  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  z-index: 10;
  overflow-y: auto;
  text-align: start;
  display: flex;
  flex-direction: column;

  div {
    padding: 5px 15px;
    cursor: pointer;

    &:hover {
      background-color: #f0f0f0;
    }
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const StyledSearchList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
