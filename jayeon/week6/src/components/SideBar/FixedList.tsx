import styled from "styled-components";
import ListItem from "./ListItem";

// 일단 하드코딩
const fixedItems = [
  { id: "f1", title: "ChatGPT" },
  { id: "f2", title: "Sora" },
  { id: "f3", title: "라이브러리", badge: "2" },
  { id: "f4", title: "GPT 탐색" },
];

export default function FixedList() {
  return (
    <Wrapper>
      {fixedItems.map((item) => (
        <ListItem key={item.id} label={item.title} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;
