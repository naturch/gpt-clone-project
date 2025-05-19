import styled from "styled-components";
import MessageBubble from "./MessageBubble";
import { useChatStore } from "../../../store/chatState";

export default function ChatArea() {
  const currentChatId = useChatStore((state) => state.currentChatId); // 현재 선택된 채팅방 ID
  const chats = useChatStore((state) => state.chats); // 전체 채팅방 목록

  // 현재 선택된 채팅방 찾기
  const currentChat = chats.find((chat) => chat.id === currentChatId);

  //현재 채팅방 메시지 렌더링
  return (
    <Wrapper>
      {currentChat?.messages.map((msg) => (
        <MessageBubble key={msg.id} sender={msg.sender} text={msg.text} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 1;
  padding: 16px;
  padding-top: 0;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: #202123;
  position: relative;
`;
