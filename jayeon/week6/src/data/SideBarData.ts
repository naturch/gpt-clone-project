export interface ChatItemType {
  id: string;
  title: string;
  updatedAt: string;
  projectId?: string; //프로젝트에 속한 채팅인지
  isFixed?: boolean; // 고정 목록인지
  badge?: string; // 배지가 있는지
}

export const allChatItems: ChatItemType[] = [
  // 고정 목록
  {
    id: "chatgpt",
    title: "ChatGPT",
    updatedAt: "2025-05-01T10:00:00",
    isFixed: true,
  },
  {
    id: "sora",
    title: "Sora",
    updatedAt: "2025-04-30T09:30:00",
    isFixed: true,
  },
  {
    id: "library",
    title: "라이브러리",
    updatedAt: "2025-04-15T15:00:00",
    isFixed: true,
    badge: "1",
  },
  {
    id: "gpt-explore",
    title: "GPT 탐색",
    updatedAt: "2025-04-01T20:00:00",
    isFixed: true,
  },

  // 프로젝트에 속하지 않는 채팅
  { id: "c1", title: "전산학 개론 요약", updatedAt: "2025-05-03T14:20:00" },
  { id: "c2", title: "딥러닝 논문 요약", updatedAt: "2025-04-24T08:50:00" },
  { id: "c3", title: "파이썬 자료구조 정리", updatedAt: "2025-03-12T18:00:00" },
  { id: "c4", title: "이산수학 복습", updatedAt: "2025-01-18T13:00:00" },
  { id: "c5", title: "정보처리기사 요약", updatedAt: "2024-12-10T16:40:00" },
  { id: "c6", title: "자바스크립트 함수형", updatedAt: "2024-09-05T11:30:00" },
  { id: "c7", title: "클라우드 보안 정리", updatedAt: "2024-04-23T19:45:00" },
  { id: "c8", title: "UX/UI 개념 노트", updatedAt: "2023-11-12T10:20:00" },
  { id: "c9", title: "데이터 시각화 실습", updatedAt: "2023-07-07T09:15:00" },
  { id: "c10", title: "코틀린 문법 정리", updatedAt: "2023-02-28T12:00:00" },

  // 프로젝트에 속한 채팅
  {
    id: "p1",
    title: "클론 UI 설계 논의",
    updatedAt: "2025-04-27T17:30:00",
    projectId: "openai-project",
  },
  {
    id: "p2",
    title: "모달 컴포넌트 리팩토링",
    updatedAt: "2025-04-22T11:40:00",
    projectId: "openai-project",
  },
  {
    id: "p3",
    title: "useEffect 실험 결과",
    updatedAt: "2025-04-20T10:10:00",
    projectId: "openai-project",
  },

  {
    id: "p4",
    title: "MLFQ 구조 설계",
    updatedAt: "2025-04-10T15:30:00",
    projectId: "os-lab",
  },
  {
    id: "p5",
    title: "xv6 스케줄링 테스트",
    updatedAt: "2025-04-09T18:20:00",
    projectId: "os-lab",
  },

  {
    id: "p6",
    title: "ERD 설계 초안",
    updatedAt: "2025-03-18T13:50:00",
    projectId: "db-study",
  },
  {
    id: "p7",
    title: "MongoDB vs MySQL",
    updatedAt: "2025-03-12T14:40:00",
    projectId: "db-study",
  },
];
