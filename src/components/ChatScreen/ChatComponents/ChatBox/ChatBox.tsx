import {
  StyledChatBoxContainer,
  StyledChatBubble,
  StyledName,
  StyledNameBubbleContainer,
  StyledProfileImg,
} from './ChatBox.style';
import ProfileImg from '@/assets/icons/chat_profile.svg';

interface ChatBoxProps {
  isMine: boolean;
  message: string;
}

export const ChatBox = ({ isMine, message }: ChatBoxProps) => {
  return (
    <StyledChatBoxContainer $isMine={isMine}>
      <StyledProfileImg src={ProfileImg} />
      <StyledNameBubbleContainer>
        <StyledName $isMine={isMine}>나는영민</StyledName>
        <StyledChatBubble $isMine={isMine}>{message}</StyledChatBubble>
      </StyledNameBubbleContainer>
    </StyledChatBoxContainer>
  );
};
