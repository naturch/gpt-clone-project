import styled from "styled-components";
import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

export default function ListSection({ title, children }: Props) {
  return (
    <SectionWrapper>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionWrapper> //위에는 제목, 아래에는 children 출력
  );
}

const SectionWrapper = styled.div`
  margin-top: 16px;
`;

export const SectionTitle = styled.div`
  color: #b0b0b0;
  font-size: 12px;
  padding: 8px;
`;
