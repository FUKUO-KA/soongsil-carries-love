import { WhiteContainer } from '@/components/WhiteContainer/WhiteContainer';
import {
  StyledContainer,
  StyledLogo,
  StyledTitle,
  StyledTitlePin,
  StyledTitlePinContainer,
} from './LoginRegister.style';
import LogoImg from '@/assets/logo.png';
import { Outlet, useLocation } from 'react-router-dom';
import { LoginRegisterTabs } from './LoginRegisterTabs/LoginRegisterTabs';

export const LoginRegister = () => {
  const location = useLocation();

  const isSignUpPath = location.pathname !== '/sign';

  return (
    <StyledContainer>
      <StyledLogo src={LogoImg} />
      <WhiteContainer>
        {isSignUpPath ? (
          <>
            <StyledTitlePinContainer>
              <StyledTitlePin $width="LONG" />
              <StyledTitlePin $width="SHORT" />
            </StyledTitlePinContainer>
            <StyledTitle>회원가입</StyledTitle>
            <Outlet />
          </>
        ) : (
          <LoginRegisterTabs />
        )}
      </WhiteContainer>
    </StyledContainer>
  );
};
