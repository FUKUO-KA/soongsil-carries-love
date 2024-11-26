import colors from '@/styles/color';
import { getFontStyle } from '@/styles/typo';
import styled from 'styled-components';

export const StyledSearchBarContainer = styled.div`
  position: relative;
  width: 279px;
  height: 39px;
`;

export const StyledSearchBar = styled.input`
  position: relative;
  width: 279px;
  height: 39px;
  padding-left: 34px;
  border-radius: 24px;
  border: 1px solid ${colors.box_border};
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

export const StyledIconImg = styled.img`
  position: absolute;
  width: 13px;
  height: 13px;
  top: 13px;
  left: 13px;
`;
