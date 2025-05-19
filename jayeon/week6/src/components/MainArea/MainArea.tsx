import styled from "styled-components";
import ChatArea from "./ChatArea/ChatArea";
import InputArea from "./InputArea/InputArea";

export default function MainArea() {
  return (
    <Wrapper>
      <ChatArea />
      <InputArea />
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
