import { WhiteContainer } from '@/components/WhiteContainer/WhiteContainer';
import {
  StyledContainer,
  StyledLogo,
  StyledTitle,
  StyledTitlePin,
  StyledTitlePinContainer,
} from './LoginRegister.style';
import LogoImg from '@/assets/logo.png';
import { Outlet } from 'react-router-dom';
import { LoginRegisterTabs } from './LoginRegisterTabs/LoginRegisterTabs';

export const LoginRegister = () => {
  return (
    <StyledContainer>
      <StyledLogo src={LogoImg} />
      <WhiteContainer>
        {location.pathname !== '/sign' ? (
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
