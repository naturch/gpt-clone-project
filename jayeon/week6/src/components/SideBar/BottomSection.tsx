import styled from "styled-components";
import ListItem from "./ListItem";
import { useState } from "react";

export default function BottomSection() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <Wrapper>
      <ListItem label="플랜 보기" onClick={() => {}} />

      <AccountWrapper>
        <ListItem label="자연 차" onClick={toggleMenu} />
        {isOpen && (
          <AccountMenu>
            <MenuItem onClick={() => {}}>작업</MenuItem>
            <MenuItem onClick={() => {}}>내 GPT</MenuItem>
            <MenuItem onClick={() => {}}>설정</MenuItem>
            <MenuItem onClick={() => {}}>로그아웃</MenuItem>
          </AccountMenu>
        )}
      </AccountWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-top: 8px;
  border-top: 1px solid #2e2f3a;
  background-color: #1e1e1e;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const AccountWrapper = styled.div`
  position: relative;
`;

const AccountMenu = styled.div`
  position: absolute;
  bottom: 36px;
  left: 0;
  background-color: #2e2f3a;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  z-index: 10;
`;

const MenuItem = styled.div`
  padding: 10px 14px;
  font-size: 14px;
  color: white;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background-color: #3a3b47;
  }
`;
