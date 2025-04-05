import styled from "styled-components";

export const Card = styled.div`
  width: 300px;
  background-color: white;
  border-radius: var(--border-radius);
  box-shadow: var(--card-shadow);
  overflow: hidden;
  text-align: center;
  transition: all 0.3s;
  position: relative;

  &:hover {
    transform: translateY(-4px); //
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const Info = styled.div`
  padding: 16px;
`;
//name + gender line
export const NameLine = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const Name = styled.h2`
  font-weight: bold;
`;

export const TagContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
`;

export const Tag = styled.span`
  background-color: #e0e7ff;
  color: var(--font-color);
  font-size: 0.85rem;
  padding: 6px 12px;
  border-radius: 20px;
`;

//수정,삭제 메뉴 버튼
export const MenuButton = styled.button`
  position: absolute;
  top: 10px;
  right: 12px;
  background: none;
  border: none;
  font-size: 20px;

  &:hover {
    color: var(--main-color);
  }
`;
