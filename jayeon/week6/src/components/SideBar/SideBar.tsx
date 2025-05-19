import styled from "styled-components";
import SidebarButtons from "./SideBarButtons";
import FixedList from "./FixedList";
import ChatList from "./ChatList";
import BottomSection from "./BottomSection";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export default function Sidebar({ isOpen, toggleSidebar }: SidebarProps) {
  return (
    <SidebarWrapper isOpen={isOpen}>
      <Header>
        <SidebarButtons isOpen={isOpen} onToggle={toggleSidebar} />
      </Header>
      {isOpen && (
        <>
          <ScrollArea>
            <FixedList />
            <ChatList />
          </ScrollArea>
          <BottomSection />
        </>
      )}
    </SidebarWrapper>
  );
}

const SidebarWrapper = styled.div<{ isOpen: boolean }>`
  width: ${({ isOpen }) => (isOpen ? "260px" : "0")};
  height: 100vh;
  background-color: #1e1e1e;
  padding: 10px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  overflow-x: hidden;
  transition: transform 0.3s ease;

  position: relative;
  transform: ${({ isOpen }) =>
    isOpen ? "translateX(0)" : "translateX(-100%)"};

  @media (max-width: 768px) {
    //768px: 태블릿 크기 ?
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 260px;
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(0)" : "translateX(-100%)"};
  }
`;

const Header = styled.div`
  position: sticky;
  top: 0;
  background-color: #1e1e1e;
  z-index: 1;
`;

const ScrollArea = styled.div`
  overflow-y: auto;
  flex: 1;
`;
