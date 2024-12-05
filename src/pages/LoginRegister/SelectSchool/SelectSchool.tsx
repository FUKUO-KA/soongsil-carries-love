import { useState, useCallback } from 'react';
import { SearchBar } from '@/components/SearchBar/SearchBar';
import { SearchResult } from '@/components/SearchBar/SearchResult';
import { StyledSearchBarContainer, StyledLine } from '@/components/SearchBar/SearchBar.style';
import { StyledTitle } from '../LoginRegister.style';
import { Button } from '@/components/Button/Button';
import schoolData from '@/data/school.json';
import useJoinStore from '@/stores/joinStore';
import { useNavigate } from 'react-router-dom';
import { Spacing } from '@/components/Spacing/Spacing';
import { debounce } from 'lodash';

export const SelectSchool = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [filteredSchools, setFilteredSchools] = useState<string[]>(schoolData);
  const { updateJoinField, joinRequest } = useJoinStore();
  const navigate = useNavigate();

  const handleInputChange = useCallback(
    debounce((value: string) => {
      if (!value.trim()) {
        setFilteredSchools(schoolData);
      } else {
        const filtered = schoolData.filter((school) =>
          school.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredSchools(filtered);
      }
    }, 200),
    []
  );

  const handleSchoolClick = (school: string) => {
    const [schoolCode, schoolName] = school.split(',');
    setInputValue(schoolName);
    updateJoinField({ schoolCode: `${schoolCode}` });
    setIsFocused(false);
  };

  const goRegisterDetail = () => {
    navigate('/sign/register');
  };

  return (
    <>
      <Spacing direction="vertical" size={33} />
      <StyledTitle>고등학교 찾기</StyledTitle>
      <StyledSearchBarContainer>
        <SearchBar
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            handleInputChange(e.target.value);
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          isVisible={isFocused && filteredSchools.length > 0}
        />
        <StyledLine $isVisible={isFocused} />
        <SearchResult
          results={filteredSchools}
          onSelect={handleSchoolClick}
          isVisible={isFocused && filteredSchools.length > 0}
        />
      </StyledSearchBarContainer>
      <Spacing direction="vertical" size={23} />
      <Button size="BIG" text="확인" onClick={goRegisterDetail} />
    </>
  );
};
