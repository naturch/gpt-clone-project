import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useChatStore } from "../../store/chatState";
import { filterChats } from "../../utils/searchChats";
import ListItem from "./ListItem";

export default function SearchDropdown() {
  const [keyword, setKeyword] = useState(""); //입력한 검색어
  const { chats, selectChat } = useChatStore();
  const navigate = useNavigate();
  const filtered = filterChats(chats, keyword); //입력된 검색어로 채팅방 필터링

  return (
    <Wrapper>
      <Input
        autoFocus //자동포커스
        type="text"
        placeholder="채팅 검색..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <Chatlist>
        {filtered.map((chat) => (
          <ListItem
            key={chat.id}
            label={chat.title}
            chatId={chat.id}
            onClick={() => {
              selectChat(chat.id); //채팅방 선택
              navigate(`/chat/${chat.id}`); //그 채팅방으로 이동
            }}
          />
        ))}
      </Chatlist>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed; // 고정 위치로 바꿈
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); // 정가운데 정렬
  background-color: #2d2f34;
  border: 1px solid #444;
  border-radius: 6px;
  width: 360px;
  max-height: 70vh;
  overflow-y: auto;
  z-index: 30;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.4);
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 12px;
  border: none;
  outline: none;
  font-size: 14px;
  background-color: #2d2f34;
  color: white;
  border-bottom: 1px solid #444;

  &::placeholder {
    color: #888;
  }
`;

const Chatlist = styled.div`
  display: flex;
  flex-direction: column;
  padding: 6px 0;
`;
