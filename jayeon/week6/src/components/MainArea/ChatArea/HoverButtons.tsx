import styled from "styled-components";
import ButtonBubble from "../../styles/ButtonBubble";
import IconButton from "../../styles/Buttons";
import WhiteIcon from "../../styles/WhiteIcon";

import copyIcon from "../../../assets/icons/copy.svg";
import editIcon from "../../../assets/icons/pen-line.svg";
import likeIcon from "../../../assets/icons/thumbs-up.svg";
import dislikeIcon from "../../../assets/icons/thumbs-down.svg";
import speakerIcon from "../../../assets/icons/volume-2.svg";

interface HoverButtonsProps {
  sender: "user" | "bot";
}

export default function HoverButtons({ sender }: HoverButtonsProps) {
  if (sender === "user") {
    // user
    return (
      <Wrapper>
        <ButtonBubble tooltipText="복사" position="bottom">
          <IconButton>
            <WhiteIcon src={copyIcon} alt="복사" />
          </IconButton>
        </ButtonBubble>

        <ButtonBubble tooltipText="메시지 편집" position="bottom">
          <IconButton>
            <WhiteIcon src={editIcon} alt="편집" />
          </IconButton>
        </ButtonBubble>
      </Wrapper>
    );
  }

  // bot
  return (
    <Wrapper>
      <ButtonBubble tooltipText="복사" position="bottom">
        <IconButton>
          <WhiteIcon src={copyIcon} alt="복사" />
        </IconButton>
      </ButtonBubble>

      <ButtonBubble tooltipText="좋은 응답" position="bottom">
        <IconButton>
          <WhiteIcon src={likeIcon} alt="좋아요" />
        </IconButton>
      </ButtonBubble>

      <ButtonBubble tooltipText="별로인 응답" position="bottom">
        <IconButton>
          <WhiteIcon src={dislikeIcon} alt="싫어요" />
        </IconButton>
      </ButtonBubble>

      <ButtonBubble tooltipText="소리 내어 읽기" position="bottom">
        <IconButton>
          <WhiteIcon src={speakerIcon} alt="읽기" />
        </IconButton>
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
