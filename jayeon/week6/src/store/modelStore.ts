import { create } from "zustand";
import { persist } from "zustand/middleware";

// 모델 상태 타입
interface ModelState {
  currentModel: string; // 현재 모델 id
  setModel: (model: string) => void; // 모델 변경 함수
}

// 전역 상태 관리 ,  로컬스토리지 저장
export const useModelStore = create(
  persist<ModelState>(
    (set) => ({
      currentModel: "gemini-1.5-flash", // 기본값
      setModel: (model) => set({ currentModel: model }),
    }),
    {
      name: "model-storage",
    }
  )
);
