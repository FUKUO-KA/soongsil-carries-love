import colors from '@/styles/color';
import styled, { createGlobalStyle, keyframes } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
    }
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    *{
    box-sizing: border-box;
    }
    a{
    text-decoration: none;
    color: inherit;
    }
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
        font-family: 'Pretendard Variable';
        background : ${colors.background};
        overflow-x: hidden;
        position: relative;
    }
`;

export const FrameContainer = styled.div`
  max-width: 100%;
  position: relative;
  min-height: calc(var(--vh, 1vh) * 100);
  margin-bottom: 30px;
`;

interface ShineProps {
  $width: string;
  $top?: string;
  $bottom?: string;
  $left?: string;
  $right?: string;
  $rotate?: string;
}

const shineAnimation = () => keyframes`
  0%, 100% {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(30deg) scale(1.8);
  }
  100% {
    transform: rotate(0deg) scale(1);
  }
`;

export const StyledShine = styled.img<ShineProps>`
  position: relative;
  width: ${({ $width }) => $width};
  top: ${({ $top }) => $top};
  bottom: ${({ $bottom }) => $bottom};
  left: ${({ $left }) => $left};
  right: ${({ $right }) => $right};
  animation: ${shineAnimation} 3s ease-in-out infinite;
`;

export const StyledShineContainer = styled.div`
  width: inherit;
  position: absolute;
`;
