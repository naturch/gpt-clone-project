import styled from "styled-components";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  tooltipText: string;
  position: "right" | "bottom" | "top"; // 버튼마다 말풍선 위치 다름
}

// 말풍선 위치에 따른 스타일 적용
const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const positionStyles = {
  right: `
    top: 50%;
    left: 100%;
    transform: translateY(-50%) translateX(8px);
  `,
  top: `
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%) translateY(-8px);
  `,
  bottom: `
    top: 100%;
    left: 50%;
    transform: translateX(-50%) translateY(8px);
  `,
};

const Bubble = styled.div<{ position: "right" | "bottom" | "top" }>`
  position: absolute;
  background-color: #343541;
  color: white;
  font-size: 13px;
  padding: 6px 10px;
  border-radius: 6px;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.2s ease;
  pointer-events: none;
  z-index: 10;

  ${({ position }) => positionStyles[position]}

  ${Wrapper}:hover & {
    opacity: 1;
  }
`;

// 마우스 올리면 말풍선 보여줌
export default function ButtonBubble({
  children,
  tooltipText,
  position,
}: Props) {
  return (
    <Wrapper>
      {children}
      <Bubble position={position}>{tooltipText}</Bubble>
    </Wrapper>
  );
}
