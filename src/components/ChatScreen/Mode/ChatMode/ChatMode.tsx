import Hamburger from '@/assets/icons/hamburger.svg';
import {
  StyledChatBoxList,
  StyledChatContent,
  StyledChatHeader,
  StyledDottedLine,
  StyledHamburger,
  StyledTitle,
} from '../ChatMode/ChatMode.style';
import { ChatBox } from '../../ChatComponents/ChatBox/ChatBox';
import { ChatInput } from '../../ChatComponents/ChatInput/ChatInput';

interface ChatModeProps {
  setIsMemberMenuOpen: (value: boolean) => void;
}

export const ChatMode = ({ setIsMemberMenuOpen }: ChatModeProps) => {
  return (
    <>
      <StyledChatContent>
        <StyledChatHeader>
          <StyledTitle>00고등학교</StyledTitle>
          <StyledHamburger src={Hamburger} onClick={() => setIsMemberMenuOpen(true)} />
        </StyledChatHeader>
        <StyledDottedLine />
        <StyledChatBoxList>
          <ChatBox isOwnMsg={false} message="나는영민나는영민나는영민나는영민나는영민나는영민" />
          <ChatBox isOwnMsg={true} message="나는영민나는영민나는영민나는영민나는영민나는영민" />
        </StyledChatBoxList>
      </StyledChatContent>
      <ChatInput />
    </>
  );
};
