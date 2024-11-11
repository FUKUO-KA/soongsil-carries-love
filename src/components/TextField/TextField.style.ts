import styled from 'styled-components';
import colors from '@/styles/color';
import { getFontStyle } from '@/styles/typo';

interface isErrorProps {
  $isError?: boolean;
}

export const StyledTextFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const StyledTextFieldLabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

export const StyledTextFieldLabel = styled.label`
  padding-left: 5px;
  ${getFontStyle('Caption3')};
  font-weight: 700;
  color: ${colors.secondary_text};
`;

export const StyledTextFieldHelperText = styled.span<isErrorProps>`
  ${getFontStyle('Caption3')};
  font-weight: 700;
  color: ${({ $isError }) => ($isError ? `${colors.sub_1}` : `${colors.secondary_text}`)};
`;

export const StyledTextFieldStarLabel = styled.span`
  color: ${colors.sub_1};
`;

export const StyledTextFieldInput = styled.input<isErrorProps>`
  width: 279px;
  height: 39px;
  padding: 13px 11px;
  border-radius: 8px;
  border: ${({ $isError }) => `1px solid ${$isError ? colors.sub_1 : colors.box_border}`};
  background: ${colors.white};
  box-sizing: border-box;

  ${getFontStyle('Caption2')};
  font-weight: 700;
  color: ${colors.secondary_text};

  &::placeholder {
    color: #c7c7c7;
  }

  &:focus {
    outline: none;
  }
`;
