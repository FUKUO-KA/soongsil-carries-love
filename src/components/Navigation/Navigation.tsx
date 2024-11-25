import {
  NavWrapper,
  NavItemLeft,
  NavItemCenter,
  NavItemRight,
  NavItemIconWrapper,
  IconWrapper,
  StyledLabel,
  StyledText,
  Column,
} from '@/components/Navigation/Navigation.style';
import { NAV_ITEMS } from '@/constants/navItem.constant';

import { useNavigationStore } from '@/stores';

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

const NavItem = ({ 
    selected, 
    onClick, 
    icon: Icon, 
    label 
}: { 
    selected: boolean, 
    onClick: () => void, 
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>,
    label: string 
}) => {
    return (
        <IconWrapper selected={selected} onClick={onClick}>
            <Column>
                <StyledLabel $visible={selected}>
                    <StyledText>{label}</StyledText>
                </StyledLabel>
                <Icon />
            </Column>
        </IconWrapper>
    );
}


export const Navigation = () => {   
    const { selectedNavItem, setSelectedNavItem } = useNavigationStore();
    return (
    <NavWrapper>
        <NavItems>
            <NavItemIconWrapper>
                {NAV_ITEMS.map(({id, icon, label}) => (
                    <NavItem 
                        key={id}
                        selected={selectedNavItem === id}
                        onClick={() => setSelectedNavItem(id)}
                        icon={icon}
                        label={label}
                    />
                ))}
            </NavItemIconWrapper>
        </NavItems>
    </NavWrapper>
  );
};

