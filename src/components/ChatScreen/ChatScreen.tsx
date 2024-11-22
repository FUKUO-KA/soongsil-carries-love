import { useState } from 'react';
import { StyledContainer, StyledContentContainer } from './ChatScreen.style';
import { ChatMode } from './Mode/ChatMode/ChatMode';
import { MemberMenuMode } from './Mode/MemberMenuMode/MemberMenuMode';

export const ChatScreen = () => {
  const [isMemberMenuOpen, setIsMemberMenuOpen] = useState(false);
  return (
    <StyledContainer>
      <StyledContentContainer>
        {isMemberMenuOpen ? (
          <MemberMenuMode setIsMemberMenuOpen={setIsMemberMenuOpen} />
        ) : (
          <ChatMode setIsMemberMenuOpen={setIsMemberMenuOpen} />
        )}
      </StyledContentContainer>
    </StyledContainer>
  );
};
