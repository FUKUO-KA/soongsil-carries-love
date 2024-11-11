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
}

export const TextField = ({ title, description, isError, errorMessage, ...props }: InputProps) => {
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
          <StyledTextFieldHelperText $isError={true}>{errorMessage}</StyledTextFieldHelperText>
        )}
      </StyledTextFieldLabelContainer>
      <StyledTextFieldInput
        id={title}
        placeholder={description}
        $isError={true}
        value={inputValue}
        onChange={handleInputChange}
        {...props}
      />
    </StyledTextFieldContainer>
  );
};
