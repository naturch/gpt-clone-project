import styled from "styled-components";

interface Props {
  label: string;
  badge?: string;
  onClick?: () => void;
}

export default function ListItem({ label, badge, onClick }: Props) {
  return (
    <ItemWrapper onClick={onClick}>
      <ItemText>{label}</ItemText>
      {badge && <Badge>{badge}</Badge>}
    </ItemWrapper>
  );
}

const ItemWrapper = styled.div`
  padding: 8px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 6px;
  color: white;
  font-size: 14px;

  &:hover {
    background-color: #2e2f3a;
    cursor: pointer;
  }
`;

const ItemText = styled.span``;

const Badge = styled.span`
  background-color: #4e4f5c;
  border-radius: 12px;
  padding: 2px 8px;
  font-size: 12px;
  color: #ccc;
`;
