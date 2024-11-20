import {
  NavWrapper,
  NavItemLeft,
  NavItemCenter,
  NavItemRight,
  NavItemIconWrapper,
  IconWrapper,
  StyledLabel,
  StyledText,
  LabelWrapper,
  Column,
} from '@/components/Navigation/Navigation.style';

import HomeIcon from '@/assets/icons/home.svg?react'
import GraphIcon from '@/assets/icons/graph.svg?react'
import MessageIcon from '@/assets/icons/message.svg?react'

import { useNavigationStore } from '@/stores';
import { Spacing } from '@/components/Spacing/Spacing';

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
    const { selectedNavItem, setSelectedNavItem } = useNavigationStore();
    return (
    <NavWrapper>
        <NavItems>
            <NavItemIconWrapper>
                <IconWrapper selected={selectedNavItem === 'home'} onClick={() => setSelectedNavItem('home')}>
                    <Column>                
                        <StyledLabel $visible={selectedNavItem === 'home'}>
                            <StyledText>홈</StyledText>
                        </StyledLabel>
                        <HomeIcon />
                    </Column>
                </IconWrapper>
                <IconWrapper selected={selectedNavItem === 'graph'} onClick={() => setSelectedNavItem('graph')}>
                    <Column>
                        <StyledLabel $visible={selectedNavItem === 'graph'}>
                            <StyledText>통계</StyledText>
                        </StyledLabel>
                        <GraphIcon />
                    </Column>
                </IconWrapper>
                <IconWrapper selected={selectedNavItem === 'message'} onClick={() => setSelectedNavItem('message')}>
                    <Column>
                        <StyledLabel $visible={selectedNavItem === 'message'}>
                            <StyledText>메세지</StyledText>
                        </StyledLabel>
                        <MessageIcon />
                    </Column>
                </IconWrapper>
            </NavItemIconWrapper>
        </NavItems>
    </NavWrapper>
  );
};

