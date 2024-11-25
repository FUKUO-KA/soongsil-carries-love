import styled from 'styled-components';
import colors  from '@/styles/color';
import { getFontStyle } from '@/styles/typo';

export const Wrapper = styled.div`
    width: 100%;
    padding: 15px;

    display: flex;
    justify-content: center;
    align-items: center;

    flex-shrink: 0; 
    border-radius: 4px;
    background-color: ${colors.white};
`;

export const DashBoardWrapper = styled.div`
    width: 100%;
    min-height: 20rem;
    background-color: #FCF3CC;
    padding: 10px;
    border-radius: 4px;
`;

export const DashBoardHeaderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const DashedLine = styled.div`
    margin: 8px auto;
    height: 3px;
    width: 100%;

    background-image: linear-gradient(
        to right,
        #877C5C 80%,
        transparent 80%
    );
    background-position: center;
    background-size: 16px 3px;
    background-repeat: repeat-x;
    border-radius: 10px;
`;

export const TableWrapper = styled.div`
    width: 100%;
    padding: 3px;
    align-items: center;
`;

export const TableHeader = styled.div`
    display: grid;
    grid-template-columns: 80px 1fr 100px;
    margin-bottom: 10px;
    gap: 10px;

    align-items: center;
    justify-content: center;

    > div {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const TableRow = styled.div`
    display: grid;
    grid-template-columns: 80px 1fr 100px;
    gap: 10px;
    margin-bottom: 10px;
    align-items: center;
`;

export const RankNumber = styled.div`
    text-align: center;

    ${getFontStyle('Caption2_B')}
    color: #877C5C;
`;

export const SchoolName = styled.div`
    text-align: center;

    ${getFontStyle('Caption2_B')}
    color: #877C5C;
`;

export const UserCount = styled.div`
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

    ${getFontStyle('Caption2_B')}
    color: #877C5C;
`;

export const StyledLogo = styled.img`
    width: 240 453px;
    margin: 100px auto;
`;