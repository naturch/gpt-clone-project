import styled from "styled-components";
import { allChatItems } from "../../data/SideBarData";
import { groupChatItemsByDate } from "../../utils/GroupByDate";
import ListSection from "./ListSection";
import ListItem from "./ListItem";
import { useNavigate } from "react-router-dom"; // 추가

export default function ChatList() {
  const Chats = allChatItems.filter((item) => !item.isFixed); // 고정 항목은 필터링
  const navigate = useNavigate(); // 추가
  const grouped = groupChatItemsByDate(Chats); // 채팅 날짜 기준으로 그룹화

  //ListSection 컴포넌트로 그룹화
  return (
    <Wrapper>
      {Object.keys(grouped).map((section) => (
        <ListSection key={section} title={section}>
          {grouped[section].map((item) => (
            <ListItem
              key={item.id}
              label={item.title}
              onClick={() => navigate(`/chat/${item.id}`)}
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
