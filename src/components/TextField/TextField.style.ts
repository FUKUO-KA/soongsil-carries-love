import styled from 'styled-components';
import colors from '@/styles/color';
import { getFontStyle } from '@/styles/typo';

interface isTextFieldProps {
  $isError?: boolean;
  $isCertificate?: boolean;
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
  ${getFontStyle('Caption3_B')};
  color: ${colors.secondary_text};
`;

export const StyledTextFieldHelperText = styled.span<isTextFieldProps>`
  ${getFontStyle('Caption3_B')};
  color: ${({ $isError }) => ($isError ? `${colors.sub_1}` : `${colors.secondary_text}`)};
`;

export const StyledTextFieldStarLabel = styled.span`
  color: ${colors.sub_1};
`;

export const StyledTextFieldInput = styled.input<isTextFieldProps>`
  width: 279px;
  height: 39px;
  padding: ${({ $isCertificate }) => ($isCertificate ? '13px 90px 13px 11px' : '13px 11px')};
  border-radius: 8px;
  border: ${({ $isError }) => `1px solid ${$isError ? colors.sub_1 : colors.box_border}`};
  background: ${colors.white};
  box-sizing: border-box;

  ${getFontStyle('Caption2_B')};
  color: ${colors.secondary_text};

  &::placeholder {
    color: #c7c7c7;
    font-size: 10px;
  }

  &:focus {
    outline: none;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0px 1000px white inset;
    box-shadow: 0 0 0px 1000px white inset;
    -webkit-text-fill-color: ${colors.text};
    transition: background-color 5000s ease-in-out 0s;
  }
`;

export const StyledRadioContainer = styled.div`
  padding-left: 4px;
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

export const StyledRadioFlex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const StyledRadioLabel = styled.label`
  padding-top: 2px;
  ${getFontStyle('Caption3_B')};
  color: ${colors.secondary_text};
`;
