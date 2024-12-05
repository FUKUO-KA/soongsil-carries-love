import { StyledIconImg, StyledSearchBar, StyledSearchBarContainer } from './SearchBar.style';
import SearchIcon from '@/assets/SearchIcon.svg';

interface SearchBarProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus: () => void;
  onBlur: () => void;
  isVisible: boolean;
}

export const SearchBar = ({ value, onChange, onFocus, onBlur, isVisible }: SearchBarProps) => {
  return (
    <StyledSearchBarContainer>
      <StyledIconImg src={SearchIcon} />
      <StyledSearchBar
        placeholder="출신 고등학교를 검색하세요."
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        $isVisible={isVisible}
      />
    </StyledSearchBarContainer>
  );
};
