import {
  StyledChatInput,
  StyledChatInputContainer,
  StyledSubmitMessageBtn,
} from './ChatInput.style';

export const ChatInput = () => {
  return (
    <StyledChatInputContainer>
      <StyledChatInput />
      <StyledSubmitMessageBtn>전송</StyledSubmitMessageBtn>
    </StyledChatInputContainer>
  );
};
