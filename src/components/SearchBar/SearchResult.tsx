import { StyledResultContainer, StyledSearchList, StyledIconImg } from './SearchBar.style';
import SearchIcon from '@/assets/SearchIcon.svg';

interface SearchResultsProps {
  results: string[];
  onSelect: (school: string) => void;
  isVisible: boolean;
}

export const SearchResult = ({ results, onSelect, isVisible }: SearchResultsProps) => {
  return (
    <StyledResultContainer $isVisible={isVisible}>
      {results.map((school) => {
        const schoolName = school.split(',')[1];
        return (
          <StyledSearchList key={school}>
            <StyledIconImg src={SearchIcon} $isList={true} />
            <div onClick={() => onSelect(school)}>{schoolName}</div>
          </StyledSearchList>
        );
      })}
    </StyledResultContainer>
  );
};
