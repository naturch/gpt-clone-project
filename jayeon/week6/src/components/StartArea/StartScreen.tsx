import styled from "styled-components";
import MessageInput from "../MainArea/InputArea/MessageInput";
import StartScreenInputButtons from "./StartScreenInputButtons";

export default function StartScreen() {
  return (
    <Wrapper>
      <Content>
        <Title>어디서부터 시작할까요?</Title>
        <InputWrapper>
          <ResizableInputWrapper>
            <MessageInput />
          </ResizableInputWrapper>
          <StartScreenInputButtons />
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
  background-color: #343541;
`;

const Content = styled.div`
  width: 100%;
  max-width: 720px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 16px;
`;

const Title = styled.div`
  font-size: 24px;
  color: white;
  text-align: center;
  opacity: 0.7;
`;

const InputWrapper = styled.div`
  background-color: #6a6b77;
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
