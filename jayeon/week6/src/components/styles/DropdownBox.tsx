import styled from "styled-components";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  style?: React.CSSProperties; // 드롭다운 위치가 각각 다르니까?
}

export default function DropdownBox({ children, style }: Props) {
  return <Box style={style}>{children}</Box>;
}

const Box = styled.div`
  position: absolute;
  top: 36px;
  right: 0;
  background-color: #2d2f34;
  border: 1px solid #3a3b47;
  border-radius: 8px;
  padding: 4px 0;
  z-index: 100;
  min-width: 180px;
  max-width: 280px;
  width: max-content; //내부 글자 수에 따라 박스 넓어지게
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.3);

  @media (max-width: 420px) {
    right: 10px;
    max-width: 90vw;
  }
`;

export const Divider = styled.div`
  height: 1px;
  background-color: #3a3b47;
  margin: 6px 0;
`;

export const UserEmail = styled.div`
  padding: 10px 14px;
  font-size: 13px;
  color: #aaa;
`;
