import { useState } from "react";
import styled from "styled-components";
import { allChatItems } from "../../data/SideBarData";
import ListItem from "./ListItem";
import { SectionTitle } from "./ListSection";

export default function ProjectList() {
  // 열려 있는 프로젝트
  const [openProjectId, setOpenProjectId] = useState<string | null>(null);

  // 프로젝트별로 채팅을 그룹화해서 저장할 객체?
  const projects: Record<string, typeof allChatItems> = {};

  // 프로젝트에 속한 채팅만
  allChatItems.forEach((item) => {
    if (!item.projectId) return;

    if (!projects[item.projectId]) {
      projects[item.projectId] = [];
    }

    projects[item.projectId].push(item);
  });

  // 프로젝트 클릭 여부에 따라
  const handleToggle = (projectId: string) => {
    if (openProjectId === projectId) {
      setOpenProjectId(null); // 열려 있는데 클릭하면 닫힘
    } else {
      setOpenProjectId(projectId); // 다른거 열면 열림
    }
  };

  return (
    <Wrapper>
      <SectionTitle>프로젝트</SectionTitle>

      {Object.entries(projects).map(([projectId, chats]) => {
        const isOpen = openProjectId === projectId;

        return (
          <div key={projectId}>
            {/* 프로젝트 id가 버튼 */}
            <ProjectButton onClick={() => handleToggle(projectId)}>
              {projectId}
            </ProjectButton>

            {/* 프로젝트 클릭해야 거기에 속한 채팅 목록 보임 */}
            {isOpen &&
              chats.map((chat) => (
                <ListItem key={chat.id} label={chat.title} />
              ))}
          </div>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const ProjectButton = styled.button`
  background-color: transparent;
  color: white;
  text-align: left;
  padding: 6px 10px;
  border: none;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #2f2f2f;
  }
`;
