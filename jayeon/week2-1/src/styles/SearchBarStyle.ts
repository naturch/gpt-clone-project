import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    margin-bottom: 14px;
  }
`;

//검색창 + 버튼 박스
export const SearchBox = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  @media (max-width: 768px) {
    gap: 6px;
  }
`;

export const Input = styled.input`
  padding: 12px;
  width: 300px;
  font-size: 1rem;

  @media (max-width: 768px) {
    width: 200px;
    font-size: 0.9rem;
  }
`;

export const Button = styled.button`
  padding: 12px 18px;
  background: var(--main-color);
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: var(--main-color-hover);
  }

  @media (max-width: 768px) {
    padding: 10px 14px;
    font-size: 0.9rem;
  }
`;
