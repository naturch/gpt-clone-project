import styled from "styled-components";
import ButtonBubble from "../../styles/ButtonBubble";
import IconButton from "../../styles/Buttons";
import WhiteIcon from "../../styles/WhiteIcon";

import plusIcon from "../../../assets/icons/plus.svg";
import globeIcon from "../../../assets/icons/globe.svg";
import ellipsisIcon from "../../../assets/icons/ellipsis.svg";
import micIcon from "../../../assets/icons/mic.svg";
import sendIcon from "../../../assets/icons/move-up.svg";

export default function InputButtons() {
  return (
    <Wrapper>
      <LeftGroup>
        <ButtonBubble tooltipText="파일 업로드 및 기타" position="top">
          <IconButton>
            <WhiteIcon src={plusIcon} alt="추가" />
          </IconButton>
        </ButtonBubble>

        <ButtonBubble tooltipText="웹에서 검색" position="top">
          <IconButton>
            <WhiteIcon src={globeIcon} alt="검색" />
          </IconButton>
        </ButtonBubble>

        <ButtonBubble tooltipText="도구 보기" position="top">
          <IconButton>
            <WhiteIcon src={ellipsisIcon} alt="도구 보기" />
          </IconButton>
        </ButtonBubble>
      </LeftGroup>

      <RightGroup>
        <ButtonBubble tooltipText="음성 입력" position="top">
          <IconButton>
            <WhiteIcon src={micIcon} alt="음성" />
          </IconButton>
        </ButtonBubble>

        <SendButton>
          <img src={sendIcon} alt="전송" />
        </SendButton>
      </RightGroup>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

const LeftGroup = styled.div`
  display: flex;
  gap: 8px;
`;

const RightGroup = styled.div`
  display: flex;
  gap: 8px;
`;

const SendButton = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;

  &:hover {
    background-color: rgb(133, 133, 134);
  }

  img {
    width: 18px;
    height: 18px;
  }
`;
