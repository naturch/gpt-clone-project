import styled from "styled-components";
import { groupChatsByDate } from "../../utils/GroupByDate";
import ListSection from "./ListSection";
import ListItem from "./ListItem";
import { useNavigate } from "react-router-dom";
import { useChatStore } from "../../store/chatState";
import { useState } from "react"; // 추가

export default function ChatList() {
  const navigate = useNavigate();

  // 전역 상태에서 chats 배열 가져옴
  const chats = useChatStore((state) => state.chats);

  // chats 날짜별로 채팅 분류
  const grouped = groupChatsByDate(chats);
  //상태변경 함수
  const { selectChat } = useChatStore();

  //검색어
  const [searchText, setSearchText] = useState("");

  // 검색 필터링
  const filteredChats = chats.filter((chat) =>
    chat.title.toLowerCase().includes(searchText.toLowerCase())
  );

  //ListSection 컴포넌트로 그룹화
  return (
    <Wrapper>
      <SearchInput
        type="text"
        placeholder="검색"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      {searchText
        ? filteredChats.map((chat) => (
            <ListItem
              key={chat.id}
              label={chat.title}
              chatId={chat.id}
              onClick={() => {
                selectChat(chat.id);
                navigate(`/chat/${chat.id}`);
              }}
            />
          ))
        : Object.keys(grouped).map((section) => (
            <ListSection key={section} title={section}>
              {grouped[section].map((chat) => (
                <ListItem
                  key={chat.id}
                  label={chat.title}
                  chatId={chat.id}
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

const SearchInput = styled.input`
  margin: 4px 12px;
  padding: 8px 12px;
  border-radius: 6px;
  border: 1px solid #444;
  background-color: #2d2f34;
  color: white;
  font-size: 14px;

  &::placeholder {
    color: #888;
  }
`;
