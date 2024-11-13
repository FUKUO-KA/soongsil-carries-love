import {
  NavWrapper,
  NavItemLeft,
  NavItemCenter,
  NavItemRight,
  NavItemIconWrapper
} from '@/components/Navigation/Navigation.style';

import HomeIcon from '@/assets/icons/home.svg?react'
import GraphIcon from '@/assets/icons/graph.svg?react'
import MessageIcon from '@/assets/icons/message.svg?react'

const NavItems = ({ children }: { children: React.ReactNode }) =>{
    return (
        <>  
            <NavItemLeft/>
            <NavItemCenter>
                {children}
            </NavItemCenter>
            <NavItemRight/>
        </>
    );
}

export const Navigation = () => {
    return (
    <NavWrapper>
        <NavItems>
            <NavItemIconWrapper>
                <HomeIcon />
                <GraphIcon />
                <MessageIcon />
            </NavItemIconWrapper>
        </NavItems>
    </NavWrapper>
  );
};

