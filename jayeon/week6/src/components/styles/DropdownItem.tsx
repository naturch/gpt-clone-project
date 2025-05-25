import styled from "styled-components";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick: () => void;
}
//드롭다운 박스 내부 item (버튼)
export default function DropdownItem({ children, onClick }: Props) {
  return <Item onClick={onClick}>{children}</Item>;
}

const Item = styled.div`
  padding: 8px 12px;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background-color: #3a3b47;
  }
`;
