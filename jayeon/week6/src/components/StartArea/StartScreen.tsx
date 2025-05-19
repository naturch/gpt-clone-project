import styled from "styled-components";
import MessageInput from "../MainArea/InputArea/MessageInput";
import StartScreenInputButtons from "./StartScreenInputButtons";

import { useState } from "react";
import { handleSendMessage } from "../../utils/handleSendMessage";
import { useNavigate } from "react-router-dom";

export default function StartScreen() {
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const navigate = useNavigate();

  const handleSend = async () => {
    if (!input.trim()) return;

    const newChatId = await handleSendMessage(input);
    navigate(`/chat/${newChatId}`);

    setInput("");
    setIsTyping(false);
  };

  return (
    <Wrapper>
      <Content>
        <Title>어디서부터 시작할까요?</Title>
        <InputWrapper>
          <ResizableInputWrapper>
            <MessageInput
              onTypingChange={setIsTyping}
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </ResizableInputWrapper>
          <StartScreenInputButtons isTyping={isTyping} onSend={handleSend} />
        </InputWrapper>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #202123;
`;

const Content = styled.div`
  width: 100%;
  max-width: 720px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 16px;

  @media (max-width: 500px) {
    gap: 300px; // 너비 최소로 줄어든 경우  gap 넓혀서 입력창 내려가 보이게
  }
`;

const Title = styled.div`
  font-size: 24px;
  color: white;
  text-align: center;
  opacity: 0.7;
`;

const InputWrapper = styled.div`
  background-color: #444654;
  padding: 10px 14px;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
//입력길이 늘어나면 입력창 길이도 늘어남
const ResizableInputWrapper = styled.div`
  width: 100%;
  display: flex;
`;
