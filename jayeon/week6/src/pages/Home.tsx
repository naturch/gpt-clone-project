//사이드바 열림 여부 , 라우팅
import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import ChatLayout from "../layouts/ChatLayout";
import ChatArea from "../components/MainArea/ChatArea/ChatArea";
import InputArea from "../components/MainArea/InputArea/InputArea";
import StartScreen from "../components/StartArea/StartScreen";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const { chatId } = useParams(); //현재 채팅 목록의 id
  const currentPath = useLocation().pathname;

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
