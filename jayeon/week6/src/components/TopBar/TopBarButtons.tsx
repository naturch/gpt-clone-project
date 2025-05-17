import styled from "styled-components";
import ButtonBubble from "../styles/ButtonBubble";
import IconButton from "../styles/Buttons";
import WhiteIcon from "../styles/WhiteIcon";

import sidebarIcon from "../../assets/icons/panel-left-close.svg";
import squarePenIcon from "../../assets/icons/square-pen.svg";
import notepadIcon from "../../assets/icons/notepad-text.svg";
import ellipsisIcon from "../../assets/icons/ellipsis-vertical.svg";
import profileIcon from "../../assets/icons/user-round-pen.svg";
import { allChatItems } from "../../data/SideBarData";

import { useNavigate } from "react-router-dom"; // 추가

interface Props {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  chatId?: string;
}

export default function TopBarButtons({
  isSidebarOpen,
  toggleSidebar,
  chatId,
}: Props) {
  // chatId에 해당하는 채팅 정보 찾기
  const currentChat = allChatItems.find((chat) => chat.id === chatId);

  const isProjectChat = !!currentChat?.projectId;
  const projectName = currentChat?.projectId;
  const chatTitle = currentChat?.title;
  const navigate = useNavigate();

  return (
    <Wrapper>
      <LeftGroup>
        {isSidebarOpen ? (
          <>
            {chatId ? (
              <>
                {/* 프로젝트 채팅이면 프로젝트명 > 채팅명 */}
                {isProjectChat && <ProjectBtn>{projectName} &gt;</ProjectBtn>}
                <ChatTitleBtn>{chatTitle}</ChatTitleBtn>
                <ModelBtn>4o</ModelBtn>
              </>
            ) : (
              //채팅 목록 선택하지 않은 경우
              <ChatTitleBtn>ChatGPT</ChatTitleBtn>
            )}
          </>
        ) : (
          <>
            <ButtonBubble tooltipText="사이드바 열기" position="bottom">
              <IconButton onClick={toggleSidebar}>
                <WhiteIcon src={sidebarIcon} alt="사이드바 열기" />
              </IconButton>
            </ButtonBubble>
            <ButtonBubble tooltipText="새 채팅" position="bottom">
              <IconButton onClick={() => navigate("/")}>
                <WhiteIcon src={squarePenIcon} alt="새 채팅" />
              </IconButton>
            </ButtonBubble>
          </>
        )}
      </LeftGroup>

      <RightGroup>
        <IconButton>
          <WhiteIcon src={notepadIcon} alt="캔버스 열기" />
        </IconButton>
        <IconButton>
          <WhiteIcon src={ellipsisIcon} alt="더보기" />
        </IconButton>
        <ProfileBtn>
          <WhiteIcon src={profileIcon} alt="프로필" />
        </ProfileBtn>
      </RightGroup>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  padding: 0 16px;
  background-color: #202123;
  border-bottom: 1px solid #2d2d2f;
`;

const LeftGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const RightGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const ChatTitleBtn = styled.button`
  background: transparent;
  color: white;
  border: none;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #2d2d2f;
    border-radius: 6px;
  }
`;

const ModelBtn = styled.div`
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 6px;
  background-color: #3e3f4b;
  color: white;
  height: fit-content;
`;

const ProfileBtn = styled(IconButton)`
  background-color: black;
  border-radius: 50%;
`;

const ProjectBtn = styled.button`
  background: transparent;
  color: #c5c5c5;
  font-size: 14px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #2d2d2f;
    border-radius: 6px;
  }
`;
