import colors from '@/styles/color';
import styled from 'styled-components';

export const StyledContainer = styled.div`
  margin: 0 auto;
  margin-top: 28px;
  width: 100%; /* 고정 */
  max-width: 360px;
  height: 80vh;
  background-color: ${colors.white};
  padding: 14px;
`;

export const StyledContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  background-color: #fcf3cc;
  padding-top: 10px;
  box-sizing: border-box;
`;
