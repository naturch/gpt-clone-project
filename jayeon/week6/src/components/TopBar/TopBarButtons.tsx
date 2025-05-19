import styled from "styled-components";
import ButtonBubble from "../styles/ButtonBubble";
import IconButton from "../styles/Buttons";

import sidebarIcon from "../../assets/icons/panel-left-close.svg";
import squarePenIcon from "../../assets/icons/square-pen.svg";
import chatIcon from "../../assets/icons/message-circle-dashed.svg";
import uploadIcon from "../../assets/icons/upload.svg";
import profileIcon from "../../assets/icons/user-round-pen.svg";

import { useNavigate } from "react-router-dom";
import useWindowWidth from "../../hooks/useWindowWidth";
import { useChatStore } from "../../store/chatState";

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
  const navigate = useNavigate();
  const isChatting = !!chatId;
  const windowWidth = useWindowWidth();
  const isCompact = windowWidth < 700;
  const { resetCurrentChatId } = useChatStore();

  let leftButtons;
  let rightButtons;

  // 사이드바 열려있을 때
  if (isSidebarOpen) {
    //  왼쪽 버튼->모델 버튼만 있음
    leftButtons = <ModelButton>ChatGPT 4o ⌄</ModelButton>;

    // 오른쪽 버튼
    rightButtons = (
      <>
        <ButtonBubble //채팅화면: 공유하기 버튼 , 시작화면: 임시채팅 버튼
          tooltipText={isChatting ? "공유하기" : "임시 채팅 토글하기"}
          position="bottom"
        >
          <IconButton
            icon={isChatting ? uploadIcon : chatIcon}
            label={isChatting ? "공유하기" : "임시"}
            wrappercolor="none"
          />
        </ButtonBubble>
        <IconButton icon={profileIcon} wrappercolor="none" />
      </>
    );
  } else if (isCompact) {
    // 사이드바 닫혀있을 때 &&
    leftButtons = (
      <>
        <ButtonBubble tooltipText="사이드바 열기" position="bottom">
          <IconButton
            icon={sidebarIcon}
            onClick={toggleSidebar}
            wrappercolor="none"
          />
        </ButtonBubble>
        <ModelButton>ChatGPT 4o ⌄</ModelButton>
      </>
    );

    rightButtons = isChatting ? (
      <ButtonBubble tooltipText="새 채팅" position="bottom">
        <IconButton
          icon={squarePenIcon}
          onClick={() => {
            resetCurrentChatId(); //새 채팅 클릭 -> 초기화 + 경로 이동
            navigate("/");
          }}
          wrappercolor="none"
        />
      </ButtonBubble>
    ) : (
      <ButtonBubble tooltipText="임시 채팅 토글하기" position="bottom">
        <IconButton icon={chatIcon} wrappercolor="none" />
      </ButtonBubble>
    );
  } else {
    // 사이드바 닫힘 + 데스크탑 뷰
    leftButtons = (
      <>
        <ButtonBubble tooltipText="사이드바 열기" position="bottom">
          <IconButton
            icon={sidebarIcon}
            onClick={toggleSidebar}
            wrappercolor="none"
          />
        </ButtonBubble>

        {isChatting && (
          <ButtonBubble tooltipText="새 채팅" position="bottom">
            <IconButton
              icon={squarePenIcon}
              onClick={() => {
                resetCurrentChatId(); //새 채팅 클릭 -> 초기화 + 경로 이동
                navigate("/");
              }}
              wrappercolor="none"
            />
          </ButtonBubble>
        )}

        <ModelButton>ChatGPT 4o ⌄</ModelButton>
      </>
    );

    rightButtons = (
      <>
        <ButtonBubble
          tooltipText={isChatting ? "공유하기" : "임시 채팅 토글하기"}
          position="bottom"
        >
          <IconButton
            icon={isChatting ? uploadIcon : chatIcon}
            label={isChatting ? "공유하기" : "임시"}
            wrappercolor="none"
          />
        </ButtonBubble>
        <IconButton icon={profileIcon} wrappercolor="none" />
      </>
    );
  }

  return (
    <Wrapper>
      <LeftGroup>{leftButtons}</LeftGroup>
      <RightGroup>{rightButtons}</RightGroup>
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

const ModelButton = styled.button`
  background: transparent;
  color: white;
  border: none;
  font-size: 14px;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 6px;

  &:hover {
    background-color: #2d2d2f;
  }
`;
