import styled from "styled-components";
import MessageBubble from "./MessageBubble";
import { allMessages } from "../../../data/ChatData";
import { useParams } from "react-router-dom";

export default function ChatArea() {
  const { chatId } = useParams(); // 주소에서 chatId 추출

  //chatId에 해당하는 메시지만 필터링
  const filteredMessages = allMessages.filter((msg) => msg.chatId === chatId);
  return (
    <Wrapper>
      {/* 더미데이터 배열 하나씩 렌더링 */}
      {filteredMessages.map((msg) => (
        <MessageBubble key={msg.id} sender={msg.sender} text={msg.text} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 1;
  padding: 16px;
  padding-top: 0; // ← TopBar 여백은 ChatLayout이 담당
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: #343541;
  position: relative;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: black;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;
