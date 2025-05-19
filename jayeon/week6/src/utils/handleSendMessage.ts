import { fetchGeminiResponse } from "../services/gemini";
import { Message, useChatStore } from "../store/chatState";

export async function handleSendMessage(input: string) {
  const trimmed = input.trim();
  if (!trimmed) return;

  const { currentChatId, addMessage, createChat, selectChat } =
    useChatStore.getState();

  //사용자 메시지 객체
  const userMessage: Message = {
    id: Date.now().toString(),
    sender: "user",
    text: trimmed,
  };

  let chatId = currentChatId;

  //  채팅방 없으면 새로 만들고, 있으면 기존 채팅방에 메시지 추가
  if (!chatId) {
    chatId = createChat(userMessage);
  } else {
    addMessage(chatId, userMessage);
  }

  selectChat(chatId); // 선택한 채팅방 상태 업데이트

  //API 요청
  try {
    const botText = await fetchGeminiResponse(trimmed);

    const botMessage: Message = {
      id: (Date.now() + 1).toString(),
      sender: "bot",
      text: botText,
    };

    addMessage(chatId, botMessage); // 응답 메시지 bot말풍선에 추가
  } catch (error) {
    const errorMessage: Message = {
      id: (Date.now() + 2).toString(),
      sender: "bot",
      text: "Gemini 응답 실패",
    };
    addMessage(chatId, errorMessage);
  }
  return chatId; // navigate
}
