import { MemberList } from '../../ChatComponents/MemberList/MemberList';
import {
  StyledBackIcon,
  StyledDottedLine,
  StyledMemberMenuContent,
  StyledMemberMenuHeader,
  StyledTitle,
} from './MemberMenuMode.style';
import BackIcon from '@/assets/icons/back_icon.svg';

interface MemberMenuProps {
  setIsMemberMenuOpen: (value: boolean) => void;
}

export const MemberMenuMode = ({ setIsMemberMenuOpen }: MemberMenuProps) => {
  return (
    <StyledMemberMenuContent>
      <StyledMemberMenuHeader>
        <StyledBackIcon src={BackIcon} onClick={() => setIsMemberMenuOpen(false)} />
        <StyledTitle>ooo고등학교</StyledTitle>
      </StyledMemberMenuHeader>
      <StyledDottedLine />
      <MemberList name="나는 영민" />
    </StyledMemberMenuContent>
  );
};
