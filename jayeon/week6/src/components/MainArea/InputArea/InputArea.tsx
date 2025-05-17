import styled from "styled-components";
import MessageInput from "./MessageInput";
import InputButtons from "./InputButtons";

export default function InputArea() {
  return (
    <Wrapper>
      <InputBoxWrapper>
        <ResizableInputWrapper>
          <MessageInput />
        </ResizableInputWrapper>
        <InputButtons />
      </InputBoxWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border-top: 1px solid #444654;
  padding: 12px;
  background-color: #343541;
`;

const InputBoxWrapper = styled.div`
  background-color: #6a6b77;
  border-radius: 24px;
  padding: 10px 14px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
// 입력길이 늘어나면 입력창도 같이
const ResizableInputWrapper = styled.div`
  width: 100%;
  display: flex;
`;
