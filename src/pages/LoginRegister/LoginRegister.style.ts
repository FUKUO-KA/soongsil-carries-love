import colors from '@/styles/color';
import styled from 'styled-components';

export const StyledContainer = styled.div`
  margin-top: 138px;
  display: flex;
  flex-direction: column;
  gap: 36px;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const StyledLogo = styled.img`
  width: 247.453px;
`;

export const StyledInfoText = styled.div`
  color: ${colors.secondary_text};
  text-align: center;
  font-family: 'Pretendard Variable';
  font-size: 6px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const StyledCertificateBtnContainer = styled.div`
  padding: 22px;
  position: absolute;
  float: right;
  right: 16px;
`;
