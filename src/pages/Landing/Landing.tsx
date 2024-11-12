import { StyledText } from './Landing.style';
import { Header } from '@/components/Header/Header';
import { Profile } from '@/components/Profile/Profile';
import { Navigation } from '@/components/Navigation/Navigation';

export const Landing = () => {
  return (
    <>
      <Header 
      right={<Profile name="OO 고등학교" />}
      left = {<Navigation/>} />
      <StyledText>안녕하세요</StyledText>
      <h1>테스트입니다</h1>
    </>
  );
};
