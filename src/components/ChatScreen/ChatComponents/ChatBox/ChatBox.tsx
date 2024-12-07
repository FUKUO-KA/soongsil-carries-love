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
  author: string;
}

export const ChatBox = ({ isOwnMsg, message, author }: ChatBoxProps) => {
  return (
    <StyledChatBoxContainer $isOwnMsg={isOwnMsg}>
      <StyledProfileImg src={ProfileImg} />
      <StyledNameBubbleContainer>
        <StyledName $isOwnMsg={isOwnMsg}>{author}</StyledName>
        <StyledChatBubble $isOwnMsg={isOwnMsg}>{message}</StyledChatBubble>
      </StyledNameBubbleContainer>
    </StyledChatBoxContainer>
  );
};
