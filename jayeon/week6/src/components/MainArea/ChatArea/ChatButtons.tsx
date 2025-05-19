import styled from "styled-components";
import ButtonBubble from "../../styles/ButtonBubble";
import IconButton from "../../styles/Buttons";

import copyIcon from "../../../assets/icons/copy.svg";
import editIcon from "../../../assets/icons/pen-line.svg";
import likeIcon from "../../../assets/icons/thumbs-up.svg";
import dislikeIcon from "../../../assets/icons/thumbs-down.svg";
import speakerIcon from "../../../assets/icons/volume-2.svg";

interface ChatButtonsProps {
  sender: "user" | "bot";
}

export default function ChatButtons({ sender }: ChatButtonsProps) {
  if (sender === "user") {
    // user
    return (
      <Wrapper>
        <ButtonBubble tooltipText="복사" position="bottom">
          <IconButton icon={copyIcon} wrappercolor="none" />
        </ButtonBubble>

        <ButtonBubble tooltipText="메시지 편집" position="bottom">
          <IconButton icon={editIcon} wrappercolor="none" />
        </ButtonBubble>
      </Wrapper>
    );
  }

  // bot
  return (
    <Wrapper>
      <ButtonBubble tooltipText="복사" position="bottom">
        <IconButton icon={copyIcon} wrappercolor="none" />
      </ButtonBubble>

      <ButtonBubble tooltipText="좋은 응답" position="bottom">
        <IconButton icon={likeIcon} wrappercolor="none" />
      </ButtonBubble>

      <ButtonBubble tooltipText="별로인 응답" position="bottom">
        <IconButton icon={dislikeIcon} wrappercolor="none" />
      </ButtonBubble>

      <ButtonBubble tooltipText="소리 내어 읽기" position="bottom">
        <IconButton icon={speakerIcon} wrappercolor="none" />
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
