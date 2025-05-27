import { ChatRoom } from "../store/chatState";
//오.
export function filterChats(chats: ChatRoom[], keyword: string) {
  const lowerKeyword = keyword.toLowerCase();
  return chats.filter((chat) =>
    chat.title.toLowerCase().includes(lowerKeyword)
  );
}
