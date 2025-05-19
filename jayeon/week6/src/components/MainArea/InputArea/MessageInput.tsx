import styled from "styled-components";
import { useRef } from "react";

interface Props {
  onTypingChange?: (isTyping: boolean) => void;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

//입력창 (자동높이조절)
export default function MessageInput({
  onTypingChange,
  value,
  onChange,
}: Props) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInput = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;

      // 입력 변화를 부모에게 알려줌
      onTypingChange?.(textarea.value.trim().length > 0);
    }
  };

  return (
    <InputBox
      ref={textareaRef}
      placeholder="무엇이든 물어보세요"
      value={value}
      onChange={onChange}
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
