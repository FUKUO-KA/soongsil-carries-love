import styled, { createGlobalStyle } from  "styled-components";

export const GlobalStyles = createGlobalStyle`
    html,
    body{
        @media screen and (max-width: 768px) {
            width: 100%;
        }
        width: 768px;
        padding: 0px;
        margin: 0px auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        // 범위 확인용
        background : grey;

    }

`

export const FrameContainer = styled.div`
    max-width: 100%;
`

