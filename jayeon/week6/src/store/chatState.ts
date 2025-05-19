import { create } from "zustand";

// 메시지 타입
export interface Message {
  id: string;
  sender: "user" | "bot";
  text: string; // 메시지 내용
}

// 채팅방  타입
export interface ChatRoom {
  id: string; // 채팅방 ID
  title: string; // 채팅방 제목
  messages: Message[]; // 메시지 배열
}

interface ChatState {
  chats: ChatRoom[];
  currentChatId: string | null; // 현재 열려 있는 채팅방 ID
  addMessage: (chatId: string, message: Message) => void;
  createChat: (message: Message) => string; // 새 채팅 생성
  selectChat: (chatId: string) => void;
  resetCurrentChatId: () => void;
}

export const useChatStore = create<ChatState>((set, get) => ({
  chats: [],
  currentChatId: null,

  // 메시지 추가
  addMessage: (chatId, message) => {
    const { chats } = get();
    const updated = chats.map((chat) =>
      chat.id === chatId
        ? { ...chat, messages: [...chat.messages, message] }
        : chat
    );
    set({ chats: updated });
  },

  // 새 채팅 생성
  createChat: (message) => {
    const newId = Date.now().toString();
    const newChat: ChatRoom = {
      id: newId,
      title: message.text.slice(0, 20) || "새 채팅",
      messages: [message],
    };
    set((state) => ({
      chats: [newChat, ...state.chats],
      currentChatId: newId,
    }));
    return newId;
  },

  // 채팅 선택
  selectChat: (chatId) => {
    set({ currentChatId: chatId });
  },

  // 새 채팅 클릭->현재chatID reset
  resetCurrentChatId: () => set({ currentChatId: null }),
}));
