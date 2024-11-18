import { InputHTMLAttributes, useState } from 'react';
import {
  StyledTextFieldContainer,
  StyledTextFieldHelperText,
  StyledTextFieldInput,
  StyledTextFieldLabel,
  StyledTextFieldLabelContainer,
  StyledTextFieldStarLabel,
} from './TextField.style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  description: string;
  isError?: boolean;
  errorMessage?: string;
  isCertificate?: boolean;
}

export const TextField = ({
  title,
  description,
  isError,
  errorMessage,
  isCertificate,
  ...props
}: InputProps) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <StyledTextFieldContainer>
      <StyledTextFieldLabelContainer>
        <StyledTextFieldLabel htmlFor={title}>
          {props.required ? (
            <>
              {title}
              <StyledTextFieldStarLabel> * </StyledTextFieldStarLabel>
            </>
          ) : (
            title
          )}
        </StyledTextFieldLabel>
        {isError && (
          <StyledTextFieldHelperText $isError={isError}>{errorMessage}</StyledTextFieldHelperText>
        )}
      </StyledTextFieldLabelContainer>
      <StyledTextFieldInput
        id={title}
        placeholder={description}
        $isError={isError}
        value={inputValue}
        onChange={handleInputChange}
        $isCertificate={isCertificate}
        {...props}
      />
    </StyledTextFieldContainer>
  );
};
