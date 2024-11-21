import styled from 'styled-components';
import GraphBackground from '@/assets/images/GraphBackground.svg?react';
import { getFontStyle } from '@/styles/typo';
import colors  from '@/styles/color';

export const GraphWrapper = styled.div`
    position: relative;
`;

export const StyledGraphBackground = styled(GraphBackground)`
    position: relative;
    width: 100%;
    height: 100%;
`;

export const GraphContainer = styled.div`
    position: absolute;
    top: 50%;
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
    flex-direction: row;
`;

export const StyledText = styled.h1`
    ${getFontStyle('Caption1_B')}
    color: #877C5C;
`;

export const StyledLabel = styled.div`
    text-align: center;
    background-color: #F1A155;
    width: fit-content;
    padding: 1px 9px;
    border-radius: 9px;
`;

export const StyledLabelText = styled.p`
    color: #FFFFFF;
    ${getFontStyle('Caption1_B')}
    white-space: nowrap;
`;

export const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

export const ColorRect = styled.div<{ color: string }>`
    width: 12px;
    height: 12px;
    border-radius: 2px;
    background-color: ${props => props.color};
`;
