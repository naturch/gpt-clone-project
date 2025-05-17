import styled from "styled-components";
import { useRef } from "react";

//입력창 (자동높이조절)
export default function MessageInput() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInput = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  return (
    <InputBox
      ref={textareaRef}
      placeholder="무엇이든 물어보세요"
      rows={1}
      onInput={handleInput}
    />
  );
}

const InputBox = styled.textarea`
  flex: 1;
  width: 100%;
  max-height: 200px;
  min-height: 36px;
  resize: none;
  overflow-y: auto;
  padding: 10px 12px;
  border: none;
  background: transparent;
  color: white;
  font-size: 16px;
  line-height: 1.5;
  font-family: inherit;

  outline: none;

  &::placeholder {
    color: #9ca0aa;
  }
`;
