import Logo from '@/assets/logo.png';
import { LogoWrapper, StyledLogo } from './Logo.style';


export const LogoComponent = () => {
    return (
        <>
            <LogoWrapper>
                <StyledLogo src = {Logo}></StyledLogo>
            </LogoWrapper>
        </>
    );
}