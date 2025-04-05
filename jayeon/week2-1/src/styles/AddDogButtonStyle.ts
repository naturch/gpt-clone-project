import styled from "styled-components";

//왼쪽 하단 버튼,텍스트 wrapper
export const PlusButtonWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  left: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  z-index: 1000;

  &:hover div {
    opacity: 1;
    transform: translateX(0);
  }

  @media (max-width: 768px) {
    left: 12px;
    bottom: 16px;
    gap: 6px;
  }
`;
//"추가하려면 눌러주세요" 텍스트 스타일
export const HoverText = styled.div`
  background-color: var(--main-color);
  color: white;
  padding: 8px 14px;
  border-radius: 8px;
  font-size: 14px;
  white-space: nowrap;
  box-shadow: var(--card-shadow);

  opacity: 0; // 기본은 숨김
  transform: translateX(-8px);
  transition: opacity 0.3s ease;
`;
//플러스 버튼
export const PlusCircle = styled.button`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background-color: var(--main-color);
  border: none;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: var(--main-color-hover);
  }

  @media (max-width: 768px) {
    width: 42px;
    height: 42px;
    font-size: 1.3rem;
  }
`;
