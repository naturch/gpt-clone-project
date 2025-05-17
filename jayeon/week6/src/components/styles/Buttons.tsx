import styled from "styled-components";
import React from "react";

interface IconButtonProps {
  children: React.ReactNode;
  tooltip?: string;
  onClick?: () => void;
  isCircle?: boolean; // 둥근 버튼 or 긴 버튼
}

export default function IconButton({
  children,
  tooltip,
  onClick,
  isCircle = true,
}: IconButtonProps) {
  return (
    <ButtonWrapper onClick={onClick} title={tooltip} $isCircle={isCircle}>
      {children}
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.button<{ $isCircle: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  background-color: transparent;
  color: white;
  cursor: pointer;
  border: 1px solid #4a4a4a;
  transition: background-color 0.2s ease;

  ${({ $isCircle }) =>
    $isCircle
      ? `
    width: 36px;
    height: 36px;
    border-radius: 50%;
  `
      : `
    height: 36px;
    padding: 0 12px;
    border-radius: 18px;
  `}

  &:hover {
    background-color: rgb(87, 88, 100);
  }
`;
