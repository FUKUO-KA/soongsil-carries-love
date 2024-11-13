import { ReactNode } from 'react';
import { FrameContainer, GlobalStyles, StyledShine, StyledShineContainer } from './Frame.style';
import Shine from '@/assets/shine.svg';

interface FrameProps {
  children: ReactNode;
}

const Frame = ({ children }: FrameProps) => {
  return (
    <>
      <GlobalStyles />
      <StyledShineContainer>
        <StyledShine src={Shine} $width="111px" $top="180px" $right="3px" />
        <StyledShine src={Shine} $width="57px" $top="90px" $right="-170px" />
        <StyledShine src={Shine} $width="57px" $top="50px" $right="10px" />
        <StyledShine src={Shine} $width="101px" $top="190px" $right="0px" />
        <StyledShine src={Shine} $width="65px" $top="2s0px" $right="150px" />
      </StyledShineContainer>
      <FrameContainer>{children}</FrameContainer>
    </>
  );
};

export default Frame;
