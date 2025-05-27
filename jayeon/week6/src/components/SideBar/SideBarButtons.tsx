import styled from "styled-components";
import ButtonBubble from "../styles/ButtonBubble";
import IconButton from "../styles/IconButton";

import { PanelLeftClose, SquarePen, Search } from "lucide-react";

import { useNavigate } from "react-router-dom";
import { useChatStore } from "../../store/chatState";

interface Props {
  isOpen: boolean;
  onToggle: () => void; //사이드바 열고 닫는 함수
  toggleSearch: () => void;
}

export default function SidebarButtons({
  isOpen,
  onToggle,
  toggleSearch,
}: Props) {
  const navigate = useNavigate();
  const { resetCurrentChatId } = useChatStore();

  if (!isOpen) return null;
  return (
    //사이드바 열려있을 때
    <Wrapper>
      <ButtonBubble tooltipText="사이드바 닫기" position="right">
        <IconButton
          icon={PanelLeftClose}
          onClick={onToggle}
          wrappercolor="none"
        />
      </ButtonBubble>

      <RightGroup>
        <ButtonBubble tooltipText="채팅 검색" position="bottom">
          <IconButton
            icon={Search}
            onClick={toggleSearch}
            wrappercolor="none"
          />
        </ButtonBubble>
        <ButtonBubble tooltipText="새 채팅" position="bottom">
          <IconButton
            icon={SquarePen}
            wrappercolor="none"
            onClick={() => {
              resetCurrentChatId(); //상태초기화
              navigate("/");
            }}
          />
        </ButtonBubble>
      </RightGroup>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RightGroup = styled.div`
  display: flex;
  gap: 6px;
`;
