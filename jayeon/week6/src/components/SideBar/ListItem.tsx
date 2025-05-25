import styled from "styled-components";
import { useState } from "react";
import { useChatStore } from "../../store/chatState";

import ellipsisIcon from "../../assets/icons/ellipsis.svg";
import trashIcon from "../../assets/icons/trash-2.svg";

import DropdownBox from "../styles/DropdownBox";
import DropdownItem from "../styles/DropdownItem";

interface Props {
  label: string;
  onClick?: () => void;
  chatId?: string;
}

export default function ListItem({ label, onClick, chatId }: Props) {
  const { deleteChat } = useChatStore(); //삭제함수
  const [openMenu, setOpenMenu] = useState(false); // 채팅 클릭 시 삭제메뉴 뜸

  return (
    <ItemWrapper>
      <ItemText onClick={onClick}>{label}</ItemText>
      {chatId && ( //채팅목록인 경우에만 더보기 표시
        <MoreButton onClick={() => setOpenMenu((prev) => !prev)}>
          <img src={ellipsisIcon} alt="더보기" />

          {openMenu && ( //메뉴 열린 경우 보여줄것들
            <DropdownBox>
              <DropdownItem //삭제버튼 누르면
                onClick={() => {
                  deleteChat(chatId);
                  setOpenMenu(false);
                }}
              >
                <img src={trashIcon} alt="삭제" />
                삭제
              </DropdownItem>
            </DropdownBox>
          )}
        </MoreButton>
      )}
    </ItemWrapper>
  );
}

const ItemWrapper = styled.div`
  padding: 8px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 6px;
  color: white;
  font-size: 14px;

  &:hover {
    background-color: #2e2f3a;
    cursor: pointer;
  }
`;

const ItemText = styled.div`
  flex: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const MoreButton = styled.button`
  position: relative; //드롭다운 위치가 부모 기준으로 뜨게
  background: transparent;
  border: none;
  padding: 4px;

  img {
    width: 16px;
    height: 16px;
    filter: invert(1);
  }

  &:hover {
    opacity: 0.7;
  }
`;
