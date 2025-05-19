// 사이드바 <->상단바
import { ReactNode } from "react";
import styled from "styled-components";
import Sidebar from "../components/SideBar/SideBar";
import TopBar from "../components/TopBar/TopBar";

interface Props {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  children: ReactNode; //컴포넌트가 감싸고 있는 내용 덩어리
  chatId?: string;
}

export default function ChatLayout({
  isSidebarOpen,
  toggleSidebar,
  chatId,
  children,
}: Props) {
  return (
    <Wrapper>
      {isSidebarOpen && ( //사이드바 열려있으면
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      )}
      <ContentArea>
        <TopBar // 상단바는 항상 children 위에 렌더링
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          chatId={chatId}
        />
        {children} {/* MainArea 또는 StartScreen */}
      </ContentArea>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  background-color: #343541;
  position: relative; //상단바 기준 위치 잡으려고
`;

const ContentArea = styled.div`
  flex: 1;
  margin-top: 48px; // TopBar 높이만큼 공간 확보
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;
