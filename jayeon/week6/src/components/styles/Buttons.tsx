import styled from "styled-components";
import { BlackIcon, WhiteIcon } from "./IconStyles";

interface IconButtonProps {
  icon: string;
  label?: string; //버튼에 표시되는 텍스트
  onClick?: () => void;
  showText?: boolean; // 버튼에서 아이콘 + 텍스트 or 아이콘만
  wrappercolor: "none" | "filled"; //버튼 배경
}

export default function IconButton({
  icon,
  label,
  onClick,
  showText = false,
  wrappercolor,
}: IconButtonProps) {
  {
    /* $ = 스타일 계산용 */
  }
  return (
    <ButtonWrapper $variant={wrappercolor} onClick={onClick}>
      {wrappercolor === "filled" ? (
        <BlackIcon src={icon} alt="icon" />
      ) : (
        <WhiteIcon src={icon} alt="icon" />
      )}
      {showText && label && <span>{label}</span>}
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.button<{ $variant: "none" | "filled" }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: 36px;

  ${({ $variant }) =>
    $variant === "filled" // 조건별로 버튼래퍼의 색상 다르게
      ? ` 
    width: 36px;
    padding: 0;
    border-radius: 50%;
    background-color: white;
    border: none;
    color: black;

    &:hover {
      background-color: #dedede;
    }
  `
      : `
    padding: 0 12px;
    border-radius: 18px;
    background-color: transparent;
    color: white;
    border: 1px solid #4a4a4a;
    white-space: nowrap; // 버튼안의 텍스트 안 흘러넘치게

    &:hover {
      background-color:rgb(171, 171, 171);
    }
  `}
`;
