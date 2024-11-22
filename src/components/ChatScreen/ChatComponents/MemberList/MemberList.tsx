import {
  StyledContactBtn,
  StyledMemberName,
  StyledMemverList,
  StyledProfile,
  StyledProfileName,
} from './MemberList.style';
import Profile from '@/assets/icons/chat_profile.svg';

interface MemberListProps {
  name: string;
}

export const MemberList = ({ name }: MemberListProps) => {
  return (
    <StyledMemverList>
      <StyledProfileName>
        <StyledProfile src={Profile} />
        <StyledMemberName>{name}</StyledMemberName>
      </StyledProfileName>
      <StyledContactBtn>연락하기</StyledContactBtn>
    </StyledMemverList>
  );
};
