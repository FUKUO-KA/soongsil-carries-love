import styled, { createGlobalStyle } from  "styled-components";

export const GlobalStyles = createGlobalStyle`
    html,
    body{
        padding: 0px;
        margin: 0px;
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

