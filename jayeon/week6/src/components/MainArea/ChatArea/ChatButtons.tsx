import styled from "styled-components";
import ButtonBubble from "../../styles/ButtonBubble";
import IconButton from "../../styles/IconButton";

import { Copy, PenLine, ThumbsUp, ThumbsDown, Volume2 } from "lucide-react";

interface ChatButtonsProps {
  sender: "user" | "bot";
  copytext: string; //복사할 텍스트
}

export default function ChatButtons({ sender, copytext }: ChatButtonsProps) {
  //복사 기능
  const handleCopy = () => {
    navigator.clipboard.writeText(copytext);
  };

  if (sender === "user") {
    // user
    return (
      <Wrapper>
        <ButtonBubble tooltipText="복사" position="bottom">
          <IconButton icon={Copy} wrappercolor="none" onClick={handleCopy} />
        </ButtonBubble>

        <ButtonBubble tooltipText="메시지 편집" position="bottom">
          <IconButton icon={PenLine} wrappercolor="none" />
        </ButtonBubble>
      </Wrapper>
    );
  }

  // bot
  return (
    <Wrapper>
      <ButtonBubble tooltipText="복사" position="bottom">
        <IconButton icon={Copy} wrappercolor="none" onClick={handleCopy} />
      </ButtonBubble>

      <ButtonBubble tooltipText="좋은 응답" position="bottom">
        <IconButton icon={ThumbsUp} wrappercolor="none" />
      </ButtonBubble>

      <ButtonBubble tooltipText="별로인 응답" position="bottom">
        <IconButton icon={ThumbsDown} wrappercolor="none" />
      </ButtonBubble>

      <ButtonBubble tooltipText="소리 내어 읽기" position="bottom">
        <IconButton icon={Volume2} wrappercolor="none" />
      </ButtonBubble>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 6px;
  margin-top: 6px;
  justify-content: flex-start;
`;
