import React from 'react';

import {
  WrapperHeader,
} from './Header.style';

interface HeaderProps {
  left?: React.ReactNode;
  right?: React.ReactNode;
}

export const Header = ({ left, right }: HeaderProps) => {
  return (
    <WrapperHeader>
      {left}
      {right}
    </WrapperHeader>
  );
};
