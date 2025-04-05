import React from "react";
import styled from "styled-components";

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
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
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
