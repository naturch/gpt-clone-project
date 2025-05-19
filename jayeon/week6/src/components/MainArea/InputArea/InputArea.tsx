import styled from "styled-components";
import MessageInput from "./MessageInput";
import InputButtons from "./InputButtons";
import { useState } from "react";
import { handleSendMessage } from "../../../utils/handleSendMessage";

export default function InputArea() {
  const [input, setInput] = useState(""); // 입력값 상태
  const [isTyping, setIsTyping] = useState(false); // 입력창 입력 상태

  // 전송버튼 클릭 시 호출함수
  const handleSend = async () => {
    if (!input.trim()) return;

    await handleSendMessage(input);
    setInput("");
    setIsTyping(false);
  };

  return (
    <Wrapper>
      <InputBoxWrapper>
        <ResizableInputWrapper>
          <MessageInput
            onTypingChange={setIsTyping}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </ResizableInputWrapper>
        <InputButtons isTyping={isTyping} onSend={handleSend} />
      </InputBoxWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 12px;
  background-color: #202123;
`;

const InputBoxWrapper = styled.div`
  background-color: #444654;
  border-radius: 24px;
  padding: 10px 14px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

const ResizableInputWrapper = styled.div`
  width: 100%;
  display: flex;
`;
