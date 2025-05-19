//상태 관리 + 라우팅 + 반응형
import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import ChatLayout from "../layouts/ChatLayout";
import ChatArea from "../components/MainArea/ChatArea/ChatArea";
import InputArea from "../components/MainArea/InputArea/InputArea";
import StartScreen from "../components/StartArea/StartScreen";
import useWindowWidth from "../hooks/useWindowWidth";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const { chatId } = useParams(); //현재chatId 가져옴옴
  const currentPath = useLocation().pathname; // 현재 경로 가져옴
  const windowWidth = useWindowWidth();

  // 창 너비 700보다 작고 && 사이드바 열려있으면 -> 사이드바 닫힘
  useEffect(() => {
    if (windowWidth < 700 && isSidebarOpen) {
      setIsSidebarOpen(false);
    }
  }, [windowWidth]);
  return (
    <ChatLayout //전체를 ChatLayout으로 감쌈
      isSidebarOpen={isSidebarOpen}
      toggleSidebar={toggleSidebar}
      chatId={chatId}
    >
      {currentPath.startsWith("/chat") ? ( //경로에 따라 메인 영역 렌더링
        <>
          <ChatArea />
          <InputArea />
        </>
      ) : (
        <StartScreen />
      )}
    </ChatLayout>
  );
}
