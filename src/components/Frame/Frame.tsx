import { ReactNode } from 'react';
import { FrameContainer, GlobalStyles } from './Frame.style';
import { RenderShines } from '../RenderShine/RenderShine';

interface FrameProps {
  children: ReactNode;
}

const Frame = ({ children }: FrameProps) => {
  return (
    <>
      <GlobalStyles />
      <RenderShines />
      <FrameContainer>{children}</FrameContainer>
    </>
  );
};

export default Frame;
