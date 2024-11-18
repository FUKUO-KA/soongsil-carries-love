import { Spacing } from '@/components/Spacing/Spacing';
import { SearchBar } from '@/components/SearchBar/SearchBar';
import { Button } from '@/components/Button/Button';
import { StyledTitle } from '../LoginRegister.style';

export const SelectSchool = () => {
  return (
    <>
      <Spacing direction="vertical" size={43} />
      <StyledTitle>고등학교 찾기</StyledTitle>
      <Spacing direction="vertical" size={14} />
      <SearchBar />
      <Spacing direction="vertical" size={23} />
      <Button size="BIG" text="확인" />
    </>
  );
};
