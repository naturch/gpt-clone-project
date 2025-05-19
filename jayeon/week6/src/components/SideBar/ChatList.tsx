import styled from "styled-components";
import { groupChatsByDate } from "../../utils/GroupByDate";
import ListSection from "./ListSection";
import ListItem from "./ListItem";
import { useNavigate } from "react-router-dom";
import { useChatStore } from "../../store/chatState";

export default function ChatList() {
  const navigate = useNavigate();

  // 전역 상태에서 chats 배열 가져옴
  const chats = useChatStore((state) => state.chats);

  // chats 날짜별로 채팅 분류
  const grouped = groupChatsByDate(chats);
  //상태변경 함수
  const { selectChat } = useChatStore();

  //ListSection 컴포넌트로 그룹화
  return (
    <Wrapper>
      {Object.keys(grouped).map((section) => (
        <ListSection key={section} title={section}>
          {grouped[section].map((chat) => (
            <ListItem
              key={chat.id}
              label={chat.title}
              onClick={() => {
                selectChat(chat.id);
                navigate(`/chat/${chat.id}`); //선택된 chatId의 경로로 이동
              }}
            />
          ))}
        </ListSection>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;
