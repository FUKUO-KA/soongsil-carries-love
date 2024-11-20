import { ButtonSizeType } from '@/constants/button.constant';
import { StyledButton } from './Button.style';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  size: ButtonSizeType;
}

export const Button = ({ text, size, disabled, onClick }: ButtonProps) => {
  return (
    <StyledButton disabled={disabled} $size={size} onClick={onClick}>
      {text}
    </StyledButton>
  );
};
