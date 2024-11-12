import React from 'react';

import Styled from './Header.style';

interface HeaderProps {
  left?: React.ReactNode;
  right?: React.ReactNode;
}

export const Header = ({ left, right }: HeaderProps) => {
  return (
    <Styled.Header>
      <Styled.HeaderLeft>{left}</Styled.HeaderLeft>
      <Styled.HeaderRight>{right}</Styled.HeaderRight>
    </Styled.Header>
  );
};
