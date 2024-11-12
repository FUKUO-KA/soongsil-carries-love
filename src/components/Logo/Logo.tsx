import Logo from '@/assets/images/Logo.svg';
import LogoBackground from '@/assets/images/LogoBackground.svg';
import { BackgroundLogo } from './Logo.style.ts';

export const LogoComponent = () => {
    return (
        <>
            <BackgroundLogo src={Logo} alt="logo"/>
        </>
    );
}