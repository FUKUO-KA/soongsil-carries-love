import { StyledWhiteContainer } from './WhiteContainer.style';

interface WhiteContainerProps {
  children: React.ReactNode;
}

export const WhiteContainer = ({ children }: WhiteContainerProps) => {
  return <StyledWhiteContainer>{children}</StyledWhiteContainer>;
};
