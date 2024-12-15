import styled from 'styled-components';
import { getFontStyle } from '@/styles/typo';
import colors from '@/styles/color';

export const StyledModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);

  z-index: 1000;
`;

export const StyledModal = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: #fff;
  border-radius: 12px;

  padding: 10px;

  width: 300px;
  height: fit-content;
  z-index: 1000;
`;

export const StyledModalTitle = styled.div`
  margin-top: 10px;
  ${getFontStyle('Header5')};
  color: ${colors.text};
`;

export const StyledModalContent = styled.div`
  ${getFontStyle('Caption1_B')};
  color: ${colors.text};
`;
