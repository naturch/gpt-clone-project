import React from "react";
import styled from "styled-components";

//삭제, 수정 콜백을 props로 받는 컴포넌트
interface Props {
  onEdit: () => void;
  onDelete: () => void;
}

const MenuWrapper = styled.div`
  position: absolute;
  top: 30px;
  right: 10px;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: var(--border-radius);
  box-shadow: var(--card-shadow);
  z-index: 10;
`;

const MenuItem = styled.div`
  padding: 10px 16px;
  font-size: 0.95rem;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #f1f1f1;
  }
`;

const EditDeleteMenu: React.FC<Props> = ({ onEdit, onDelete }) => {
  return (
    <MenuWrapper>
      <MenuItem onClick={onEdit}>수정</MenuItem>
      <MenuItem onClick={onDelete}>삭제</MenuItem>
    </MenuWrapper>
  );
};

export default EditDeleteMenu;
