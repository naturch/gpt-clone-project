import styled from "styled-components";
import ButtonBubble from "../styles/ButtonBubble";
import IconButton from "../styles/IconButton";

import {
  PanelLeftClose,
  SquarePen,
  MessageCircleDashed,
  Upload,
  UserRoundPen,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import useWindowWidth from "../../hooks/useWindowWidth";
import { useChatStore } from "../../store/chatState";

import ModelDropdown from "./ModelDropdown";
import DropdownButton from "../styles/DropdownButton";
import DropdownItem from "../styles/DropdownItem";
import { Divider, UserEmail } from "../styles/DropdownBox";

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

  //  사이드바 열려 있을 때
  if (isSidebarOpen) {
    leftButtons = <ModelDropdown />;

    rightButtons = (
      <>
        <ButtonBubble
          tooltipText={isChatting ? "공유하기" : "임시 채팅 토글하기"}
          position="bottom"
        >
          <IconButton
            icon={isChatting ? Upload : MessageCircleDashed}
            label={isChatting ? "공유하기" : "임시"}
            wrappercolor="none"
          />
        </ButtonBubble>

        <DropdownButton icon={UserRoundPen}>
          <UserEmail>me@email.com</UserEmail>
          <Divider />

          <DropdownItem onClick={() => console.log("업그레이드 클릭")}>
            플랜 업그레이드
          </DropdownItem>
          <DropdownItem onClick={() => console.log("작업 클릭")}>
            작업
          </DropdownItem>
          <DropdownItem onClick={() => console.log("내 GPT 클릭")}>
            내 GPT
          </DropdownItem>
          <DropdownItem onClick={() => console.log("맞춤 설정 클릭")}>
            ChatGPT 맞춤 설정
          </DropdownItem>
          <DropdownItem onClick={() => console.log("설정 클릭")}>
            설정
          </DropdownItem>
          <DropdownItem onClick={() => console.log("단축키 클릭")}>
            키보드 단축키
          </DropdownItem>

          <Divider />

          <DropdownItem onClick={() => console.log("FAQ 클릭")}>
            도움말 및 FAQ
          </DropdownItem>
          <DropdownItem onClick={() => console.log("릴리즈 클릭")}>
            릴리즈 노트
          </DropdownItem>
          <DropdownItem onClick={() => console.log("약관 클릭")}>
            이용약관 및 정책
          </DropdownItem>
          <DropdownItem onClick={() => console.log("확장프로그램 클릭")}>
            ChatGPT 검색 확장 프로그램 받기
          </DropdownItem>

          <Divider />

          <DropdownItem onClick={() => console.log("로그아웃 클릭")}>
            로그아웃
          </DropdownItem>
        </DropdownButton>
      </>
    );
  }

  //모바일 화면일 때
  else if (isCompact) {
    leftButtons = (
      <>
        <ButtonBubble tooltipText="사이드바 열기" position="bottom">
          <IconButton
            icon={PanelLeftClose}
            onClick={toggleSidebar}
            wrappercolor="none"
          />
        </ButtonBubble>
        <ModelDropdown />
      </>
    );

    rightButtons = isChatting ? (
      <ButtonBubble tooltipText="새 채팅" position="bottom">
        <IconButton
          icon={SquarePen}
          onClick={() => {
            resetCurrentChatId();
            navigate("/");
          }}
          wrappercolor="none"
        />
      </ButtonBubble>
    ) : (
      <ButtonBubble tooltipText="임시 채팅 토글하기" position="bottom">
        <IconButton icon={MessageCircleDashed} wrappercolor="none" />
      </ButtonBubble>
    );
  }

  //  사이드바 닫힘 + 데스크탑
  else {
    leftButtons = (
      <>
        <ButtonBubble tooltipText="사이드바 열기" position="bottom">
          <IconButton
            icon={PanelLeftClose}
            onClick={toggleSidebar}
            wrappercolor="none"
          />
        </ButtonBubble>

        {isChatting && (
          <ButtonBubble tooltipText="새 채팅" position="bottom">
            <IconButton
              icon={SquarePen}
              onClick={() => {
                resetCurrentChatId();
                navigate("/");
              }}
              wrappercolor="none"
            />
          </ButtonBubble>
        )}

        <ModelDropdown />
      </>
    );

    rightButtons = (
      <>
        <ButtonBubble
          tooltipText={isChatting ? "공유하기" : "임시 채팅 토글하기"}
          position="bottom"
        >
          <IconButton
            icon={isChatting ? Upload : MessageCircleDashed}
            label={isChatting ? "공유하기" : "임시"}
            wrappercolor="none"
          />
        </ButtonBubble>
        <DropdownButton icon={UserRoundPen}>
          <UserEmail>me@email.com</UserEmail>
          <Divider />
          <DropdownItem onClick={() => console.log("로그아웃 클릭")}>
            로그아웃
          </DropdownItem>
        </DropdownButton>
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
