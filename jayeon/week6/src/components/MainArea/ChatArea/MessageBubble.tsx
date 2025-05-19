import styled from "styled-components";
import ChatButtons from "./ChatButtons";

interface MessageBubbleProps {
  sender: "user" | "bot";
  text: string;
}

export default function MessageBubble({ sender, text }: MessageBubbleProps) {
  const isUser = sender === "user";

  return (
    <Wrapper isUser={isUser}>
      <Bubble isUser={isUser}>{text}</Bubble>
      <ChatButtons sender={sender} />
    </Wrapper>
  );
}

// 말풍선 위치 (user:end, bot:start)
const Wrapper = styled.div<{ isUser: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: ${({ isUser }) => (isUser ? "flex-end" : "flex-start")};
  padding: 8px 0;
`;

const Bubble = styled.div<{ isUser: boolean }>`
  max-width: 80%;
  white-space: pre-wrap;
  word-break: break-word; //단어 길어지면 줄바꿈 (말풍선 넘지않게)
  padding: 10px 14px;
  border-radius: 14px;
  font-size: 16px;
  line-height: 1.5;
  color: white;
  background-color: ${({ isUser }) => (isUser ? "#444654" : "transparent")};
`;
