import styled from "styled-components";
import ButtonBubble from "../styles/ButtonBubble";
import WhiteIcon from "../styles/WhiteIcon";

import panelLeftClose from "../../assets/icons/panel-left-close.svg";
import squarePen from "../../assets/icons/square-pen.svg";
import search from "../../assets/icons/search.svg";

import { useNavigate } from "react-router-dom"; // 추가

interface Props {
  isOpen: boolean;
  onToggle: () => void; //사이드바 열고 닫는 함수
}

export default function SidebarButtons({ isOpen, onToggle }: Props) {
  const navigate = useNavigate();
  if (isOpen) {
    return (
      //사이드바 열려있을 때
      <Wrapper>
        <ButtonBubble tooltipText="사이드바 닫기" position="right">
          <IconButton onClick={onToggle}>
            <WhiteIcon src={panelLeftClose} alt="닫기" />
          </IconButton>
        </ButtonBubble>

        <RightGroup>
          <ButtonBubble tooltipText="새 채팅" position="bottom">
            <IconButton onClick={() => navigate("/")}>
              <WhiteIcon src={squarePen} alt="새 채팅" />
            </IconButton>
          </ButtonBubble>

          <ButtonBubble tooltipText="채팅 검색" position="bottom">
            <IconButton>
              <WhiteIcon src={search} alt="검색" />
            </IconButton>
          </ButtonBubble>
        </RightGroup>
      </Wrapper>
    );
  }
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

const IconButton = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: transparent;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #3a3b47;
  }
`;
