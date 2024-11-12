import styled from 'styled-components';
import { getFontStyle } from '@/styles/typo';
import colors from '@/styles/color';


export const ProfileWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const UserAvatar = styled.div`
    position: relative;
    left: 2rem;
    background-color: ${colors.profile_background};
    width: 45px;
    height: 45px;
    border-radius: 50%;
    display: flex;          
    justify-content: center;
    align-items: center;  
`;

export const UserInfoWrapper = styled.div`
    background-color: ${colors.profile_background};
    width: 121px;
    height: 35px;
    flex-shrink: 0;

    display: flex;
    justify-content: center;
    align-items: center;  
    border-radius: 20px;
`

export const NameWrapper = styled.div`
    background-color: ${colors.profile_text_background};
    width: 82px;
    height: 22px;
    border-radius: 11px;

    position: relative;
    left: 10px;
`;

export const UserName = styled.h1`
    color: ${colors.profile_text};
    line-height: 1.8;
    ${getFontStyle('Caption2_B')}
`;

