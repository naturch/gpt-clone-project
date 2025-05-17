import styled from "styled-components";
import ChatArea from "./ChatArea/ChatArea";
import MessageInput from "./InputArea/MessageInput";
import MessageButtons from "./InputArea/InputButtons";

export default function MainArea() {
  return (
    <Wrapper>
      <ChatArea />
      <InputArea>
        <MessageInput />
        <MessageButtons />
      </InputArea>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 1;
  margin-top: 48px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  background-color: #343541;
  height: calc(100vh - 48px);
  overflow: hidden;
`;

const InputArea = styled.div`
  border-top: 1px solid #444654;
  padding: 12px;
`;
