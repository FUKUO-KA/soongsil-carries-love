import styled from 'styled-components';
import GraphBackground from '@/assets/images/GraphBackground.svg?react';
import { getFontStyle } from '@/styles/typo';

export const GraphWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

export const StyledGraphBackground = styled(GraphBackground)`
    position: relative;
    width: 100%;
    height: 100%;
`;

export const GraphContainer = styled.div`
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
export const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
`;

export const StyledText = styled.h1`
    ${getFontStyle('Caption1_B')}
    color: #877C5C;
    margin: 30px 0 10px 0;
`;