import React, { InputHTMLAttributes } from 'react';
import { Control, useController } from 'react-hook-form';
import {
  StyledRadioContainer,
  StyledRadioFlex,
  StyledRadioLabel,
  StyledTextFieldContainer,
  StyledTextFieldHelperText,
  StyledTextFieldInput,
  StyledTextFieldLabel,
  StyledTextFieldLabelContainer,
  StyledTextFieldStarLabel,
} from './TextField.style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  title: string;
  type?: string;
  description?: string;
  isCertificate?: boolean;
  isSelectGender?: boolean;
  control: Control<any>;
  rules?: Record<string, any>;
}

export const TextField = ({
  name,
  title,
  type,
  description,
  isCertificate,
  isSelectGender,
  control,
  rules,
}: InputProps) => {
  const { field, fieldState } = useController({
    name,
    control,
    defaultValue: '',
    rules,
  });

  return (
    <StyledTextFieldContainer>
      <StyledTextFieldLabelContainer>
        <StyledTextFieldLabel htmlFor={name}>
          {title}
          {rules?.required && <StyledTextFieldStarLabel> * </StyledTextFieldStarLabel>}
        </StyledTextFieldLabel>
        {fieldState.error && (
          <StyledTextFieldHelperText $isError={!!fieldState.error}>
            {fieldState.error.message}
          </StyledTextFieldHelperText>
        )}
      </StyledTextFieldLabelContainer>
      {isSelectGender ? (
        <StyledRadioContainer>
          <StyledRadioFlex>
            <StyledRadioLabel htmlFor="FEMALE">여자</StyledRadioLabel>
            <input
              type="radio"
              id="FEMALE"
              value="FEMALE"
              checked={field.value === 'FEMALE'}
              onChange={() => field.onChange('FEMALE')}
            />
          </StyledRadioFlex>
          <StyledRadioFlex>
            <StyledRadioLabel htmlFor="MALE">남자</StyledRadioLabel>
            <input
              type="radio"
              id="MALE"
              value="MALE"
              checked={field.value === 'MALE'}
              onChange={() => field.onChange('MALE')}
            />
          </StyledRadioFlex>
          <StyledRadioFlex>
            <StyledRadioLabel htmlFor="NONE">미지정</StyledRadioLabel>
            <input
              type="radio"
              id="NONE"
              value="NONE"
              checked={field.value === 'NONE'}
              onChange={() => field.onChange('NONE')}
            />
          </StyledRadioFlex>
        </StyledRadioContainer>
      ) : (
        <StyledTextFieldInput
          id={name}
          type={type}
          placeholder={description}
          value={field.value}
          onChange={field.onChange}
          onBlur={field.onBlur}
          $isError={!!fieldState.error}
          $isCertificate={isCertificate}
        />
      )}
    </StyledTextFieldContainer>
  );
};
