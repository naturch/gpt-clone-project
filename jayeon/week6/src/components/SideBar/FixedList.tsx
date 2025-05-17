import styled from "styled-components";
import ListItem from "./ListItem";
import { ChatItemType, allChatItems } from "../../data/SideBarData";

export default function FixedList() {
  // isFixed true인 것만
  const fixedItems: ChatItemType[] = allChatItems.filter(
    (item) => item.isFixed
  );

  return (
    <Wrapper>
      {fixedItems.map((item) => (
        <ListItem key={item.id} label={item.title} badge={item.badge} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;
