import styled from 'styled-components';
import colors from '@/styles/color';

export const NavWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`;

export const NavItemLeft = styled.div`
    position: relative;
    left: 25px;
    background-color: ${colors.profile_background};
    width: 51px;
    height: 51px;
    border-radius: 50%;
    display: flex;          
    justify-content: center;
    align-items: center;  
`;

export const NavItemCenter = styled.div`
    background-color: ${colors.profile_background};
    width: 51px;
    height: 51px;
    border-radius: 50%;
    display: flex;          
    justify-content: center;
    align-items: center; 
    z-index: 1;
`;

export const NavItemRight = styled.div`
    position: relative;
    right: 25px;
    background-color: ${colors.profile_background};
    width: 51px;
    height: 51px;
    border-radius: 50%;
    display: flex;          
    justify-content: center;
    align-items: center;  
`;

export const NavItemIconWrapper = styled.div`
    display: flex;
    position: relative;
    z-index: 100;
    gap: 20px;
`;

