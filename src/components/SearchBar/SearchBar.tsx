import { StyledIconImg, StyledSearchBar, StyledSearchBarContainer } from './SearchBar.style';
import SearchIcon from '@/assets/SearchIcon.svg';

export const SearchBar = () => {
  return (
    <StyledSearchBarContainer>
      <StyledIconImg src={SearchIcon} />
      <StyledSearchBar placeholder="출신 고등학교를 검색하세요." />
    </StyledSearchBarContainer>
  );
};
