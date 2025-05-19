import styled from "styled-components";
import TopBarButtons from "./TopBarButtons";

interface TopBarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  chatId?: string;
}

export default function TopBar({
  isSidebarOpen,
  toggleSidebar,
  chatId,
}: TopBarProps) {
  return (
    <Container isSidebarOpen={isSidebarOpen}>
      <TopBarButtons
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        chatId={chatId}
      />
    </Container>
  );
}

//사이드바 열림 여부에 따라 left와 width 변경
const Container = styled.div<{ isSidebarOpen: boolean }>`
  position: fixed; //고정
  top: 0;
  left: ${({ isSidebarOpen }) => (isSidebarOpen ? "260px" : "0")};
  width: ${({ isSidebarOpen }) =>
    isSidebarOpen ? "calc(100% - 260px)" : "100%"};
  height: 48px;
  background-color: #202123;
  border-bottom: 1px solid #2d2d2f;
  z-index: 100;
  transition: left 0.3s ease, width 0.3s ease;
`;
