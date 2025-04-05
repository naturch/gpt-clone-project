import styled from "styled-components";

export const PlusButtonWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  left: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  z-index: 1000;

  @media (max-width: 768px) {
    left: 12px;
    bottom: 16px;
    gap: 6px;
  }
`;

export const HoverText = styled.div`
  background-color: #6c63ff;
  color: white;
  padding: 8px 14px;
  border-radius: 8px;
  font-size: 14px;
  white-space: nowrap;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const PlusCircle = styled.button`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background-color: #6c63ff;
  border: none;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #574bff;
  }

  @media (max-width: 768px) {
    width: 42px;
    height: 42px;
    font-size: 1.3rem;
  }
`;
