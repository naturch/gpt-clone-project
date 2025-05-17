import { ChatItemType } from "../data/SideBarData";

// 채팅을 한 날짜를 기준으로 그룹  정해주는는
function getSectionName(updatedAt: string): string {
  const now = new Date();
  const updated = new Date(updatedAt);

  const nowYear = now.getFullYear();
  const updatedYear = updated.getFullYear();

  const diffDays = (now.getTime() - updated.getTime()) / (1000 * 60 * 60 * 24);

  if (diffDays <= 7) return "지난 7일";
  if (diffDays <= 30) return "지난 30일";

  if (nowYear === updatedYear) {
    // 같은 해면 month 분류
    return `${updated.getMonth() + 1}월`;
  } else {
    // 다른 해면 year 분류
    return `${updatedYear}년`;
  }
}

//최근 채팅 목록이 위로오게 정렬하기 위한 함수
function getDateFromSection(section: string): Date {
  const now = new Date();

  if (section === "지난 7일")
    return new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  if (section === "지난 30일")
    return new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
  if (section.includes("월")) {
    const month = parseInt(section.replace("월", ""), 10);
    return new Date(now.getFullYear(), month - 1, 1);
  }
  if (section.includes("년")) {
    const year = parseInt(section.replace("년", ""), 10);
    return new Date(year, 0, 1);
  }

  return new Date(0); // 아주 오래된 날짜로 fallback?
}

export function groupChatItemsByDate(items: ChatItemType[]) {
  const grouped: Record<string, ChatItemType[]> = {};

  // for문으로 채팅 하나씩 돌면서 그룹 분류
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const section = getSectionName(item.updatedAt);

    if (!grouped[section]) {
      grouped[section] = [];
    }

    grouped[section].push(item);
  }

  /*뭔소리야.*/

  // 정렬 순서를 위해 section 이름을 날짜로 변환해서 비교
  const sortedEntries = Object.entries(grouped).sort((a, b) => {
    const aDate = getDateFromSection(a[0]);
    const bDate = getDateFromSection(b[0]);
    return bDate.getTime() - aDate.getTime(); // 최신순 정렬
  });

  // 다시 객체 형태로 바꿔서 반환
  const sortedGrouped: Record<string, ChatItemType[]> = {};
  for (let i = 0; i < sortedEntries.length; i++) {
    const [section, items] = sortedEntries[i];
    sortedGrouped[section] = items;
  }

  return sortedGrouped;
}
