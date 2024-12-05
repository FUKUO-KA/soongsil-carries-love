import styled from 'styled-components';
import colors from '@/styles/color';
import { getFontStyle } from '@/styles/typo';

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
    z-index: 1;

    justify-content: center;
    align-items: center;
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
    gap: 21px;
    justify-content: center;
    align-items: center;
`;

export const IconWrapper = styled.div<{ selected: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    
    svg path {
        fill: ${({ selected }) => selected ? '#F7CC65' : '#877C5C'};
    }
`;

export const StyledLabel = styled.div<{ $visible: boolean }>`
    opacity: ${({ $visible }) => ($visible ? 1 : 0)};
    visibility: ${({ $visible }) => ($visible ? 'visible' : 'hidden')};
    transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;
    position: absolute;
    top: -20px;
    text-align: center;
    background-color: #F7CC65;
    width: fit-content;
    padding: 1px 9px;
    border-radius: 9px;
`;

export const StyledText = styled.p`
    color: #877C5C;
    ${getFontStyle('Caption3_B')}
    white-space: nowrap;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;