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
import { useEffect, useRef, useState } from 'react';
import APIAxiosInstance from '@/api/axios';

interface ChatModeProps {
  setIsMemberMenuOpen: (value: boolean) => void;
}

interface MessageObject {
  timestamp: string;
  user_id: string;
  message: string;
}

export const ChatMode = ({ setIsMemberMenuOpen }: ChatModeProps) => {
  const API_GATEWAY_ID = import.meta.env.VITE_APP_API_PATH;
  const SOCKET_API_GATEWAY_ID = import.meta.env.VITE_APP_SOCKET_API_PATH;

  const userStorage = JSON.parse(localStorage.getItem('user') || '{}');
  const highSchoolName = userStorage.highSchoolName || '';
  const highSchoolCode = userStorage.highSchoolCode || '';
  const myNickname = userStorage.nickname || '';

  const [data, setData] = useState<{ message: string; user_id: string }[]>([]);

  const websocket = useRef<WebSocket | null>(null);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  const closeWebSocket = () => {
    if (timer.current) {
      clearInterval(timer.current);
      timer.current = null;
    }
    if (websocket.current) {
      websocket.current.close();
      websocket.current = null;
    }
  };

  const connectToWebSocket = () => {
    const address = `wss://${SOCKET_API_GATEWAY_ID}.execute-api.ap-northeast-2.amazonaws.com/${import.meta.env.VITE_APP_BACKEND_STAGE}-${import.meta.env.VITE_APP_BACKEND_VERSION}?user_id=${myNickname}&room_id=${highSchoolCode}`;

    websocket.current = new WebSocket(address);

    websocket.current.onopen = () => {
      console.log('WebSocket connected');
      timer.current = setInterval(() => {
        websocket.current?.send(JSON.stringify({ message: 'ping' }));
      }, 60 * 1000);
    };

    websocket.current.onmessage = (event) => {
      const obj = JSON.parse(event.data) as MessageObject;
      onMessageReceived(obj);
    };

    websocket.current.onclose = () => {
      console.log('WebSocket closed');
      closeWebSocket();
    };

    websocket.current.onerror = (event) => {
      console.error('WebSocket error observed:', event);
      closeWebSocket();
    };
  };

  const fetchChatData = async () => {
    try {
      const result = await APIAxiosInstance.get(
        `https://${API_GATEWAY_ID}.execute-api.ap-northeast-2.amazonaws.com/${import.meta.env.VITE_APP_BACKEND_STAGE}/chat`,
        {
          params: {
            room_id: highSchoolCode,
          },
        }
      );

      const formattedMessages = result.data.map((msg: MessageObject) => ({
        message: msg.message,
        user_id: msg.user_id,
      }));

      setData(formattedMessages);
    } catch (error) {
      console.error('Error fetching chat data:', error);
    }
  };

  const onMessageReceived = (message: MessageObject) => {
    if (message && message.message === 'ping') {
      return;
    }

    const newMessage = {
      message: message.message,
      user_id: message.user_id,
    };

    setData((prevData) => [...prevData, newMessage]);
  };

  const onSend = async (message: string) => {
    try {
      await APIAxiosInstance.put(
        `https://${API_GATEWAY_ID}.execute-api.ap-northeast-2.amazonaws.com/${import.meta.env.VITE_APP_BACKEND_STAGE}/chat`,
        {
          room_id: highSchoolCode,
          text: message,
          user_id: myNickname,
          name: 'name_test',
        }
      );
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  useEffect(() => {
    fetchChatData();
    connectToWebSocket();
  }, []);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [data]);

  return (
    <>
      <StyledChatContent>
        <StyledChatHeader>
          <StyledTitle>{highSchoolName}</StyledTitle>
          <StyledHamburger src={Hamburger} onClick={() => setIsMemberMenuOpen(true)} />
        </StyledChatHeader>
        <StyledDottedLine />
        <StyledChatBoxList>
          {data.map((messageObj, index) => {
            const isOwnMsg = messageObj.user_id === myNickname;
            return (
              <ChatBox
                key={index}
                isOwnMsg={isOwnMsg}
                message={messageObj.message}
                author={messageObj.user_id}
              />
            );
          })}
          <div ref={bottomRef}></div>
        </StyledChatBoxList>
      </StyledChatContent>
      <ChatInput onSend={onSend} />
    </>
  );
};
