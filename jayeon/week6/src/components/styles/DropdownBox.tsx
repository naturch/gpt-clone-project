import styled from "styled-components";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  style?: React.CSSProperties; // 드롭다운 위치가 각각 다르니까
}

export default function DropdownBox({ children, style }: Props) {
  return <Box style={style}>{children}</Box>;
}

const Box = styled.div`
  position: absolute;
  top: 32px;
  right: 0;
  background-color: #2d2f34;
  border: 1px solid #3a3b47;
  border-radius: 6px;
  padding: 4px 0;
  z-index: 20;
  min-width: 140px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
`;
