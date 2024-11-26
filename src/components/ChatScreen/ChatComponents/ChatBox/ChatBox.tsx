import {
  StyledChatBoxContainer,
  StyledChatBubble,
  StyledName,
  StyledNameBubbleContainer,
  StyledProfileImg,
} from './ChatBox.style';
import ProfileImg from '@/assets/icons/chat_profile.svg';

interface ChatBoxProps {
  isOwnMsg: boolean;
  message: string;
}

export const ChatBox = ({ isOwnMsg, message }: ChatBoxProps) => {
  return (
    <StyledChatBoxContainer $isOwnMsg={isOwnMsg}>
      <StyledProfileImg src={ProfileImg} />
      <StyledNameBubbleContainer>
        <StyledName $isOwnMsg={isOwnMsg}>나는영민</StyledName>
        <StyledChatBubble $isOwnMsg={isOwnMsg}>{message}</StyledChatBubble>
      </StyledNameBubbleContainer>
    </StyledChatBoxContainer>
  );
};
