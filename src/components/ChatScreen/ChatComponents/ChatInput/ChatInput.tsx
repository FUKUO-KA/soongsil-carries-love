import {
  StyledChatInput,
  StyledChatInputContainer,
  StyledSubmitMessageBtn,
} from './ChatInput.style';
import {useState} from "react";

interface ChatInputProps {
    onSend: (message: string) => void; // onSend 콜백 함수
}

export const ChatInput: React.FC<ChatInputProps> = ({ onSend }) => {
    const [message, setMessage] = useState<string>("");

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value);
    };

    const handleSend = () => {
        if (message.trim()) {
            onSend(message.trim());
            setMessage(""); // 메시지 전송 후 입력 필드 초기화
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey && message.trim()) {
            e.preventDefault(); // 기본 Enter 동작 방지 (줄바꿈 대신 메시지 전송)
            handleSend();
        }
    };

    return (
        <StyledChatInputContainer>
            <StyledChatInput
                value={message}
                onChange={handleInputChange}
                onKeyPress={handleKeyDown}
                placeholder="Type your message..."
                rows={1} // 기본 줄 수
            />
            <StyledSubmitMessageBtn onClick={handleSend}>전송</StyledSubmitMessageBtn>
        </StyledChatInputContainer>
    );
};