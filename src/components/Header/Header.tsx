import React from 'react';

import {
  WrapperHeader,
  LeftWrapper,
} from './Header.style';

interface HeaderProps {
  left?: React.ReactNode;
  right?: React.ReactNode;
}

export const Header = ({ left, right }: HeaderProps) => {
  return (
    <WrapperHeader>
      <LeftWrapper>
      {left}
      </LeftWrapper>

      {right}
    </WrapperHeader>
  );
};
