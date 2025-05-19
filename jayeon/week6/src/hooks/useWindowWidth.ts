import { useState, useEffect } from "react";

// 창 너비 상태 변화를 감지하는 커스텀 훅
export default function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth); // 창 크기 변경 시 상태 업데이트

    window.addEventListener("resize", handleResize); // 이벤트 리스너 등록
    return () => window.removeEventListener("resize", handleResize); // 컴포넌트 언마운트 시 정리
  }, []);

  return width; // 현재 창 너비 반환
}
