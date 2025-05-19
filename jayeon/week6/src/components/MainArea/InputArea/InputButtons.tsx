import styled from "styled-components";
import ButtonBubble from "../../styles/ButtonBubble";
import IconButton from "../../styles/Buttons";

import plusIcon from "../../../assets/icons/plus.svg";
import globeIcon from "../../../assets/icons/globe.svg";
import ellipsisIcon from "../../../assets/icons/ellipsis.svg";
import micIcon from "../../../assets/icons/mic.svg";
import audioLinesIcon from "../../../assets/icons/audio-lines.svg";
import sendIcon from "../../../assets/icons/move-up.svg";

import useWindowWidth from "../../../hooks/useWindowWidth";

//입력 여부에 따라 버튼 변화를 주기 위해
interface Props {
  isTyping: boolean;
  onSend: () => void;
}
export default function InputButtons({ isTyping, onSend }: Props) {
  const isCompact = useWindowWidth() < 700;

  return (
    <Wrapper>
      <LeftGroup>
        <ButtonBubble tooltipText="파일 업로드 및 기타" position="top">
          <IconButton icon={plusIcon} wrappercolor="none" />
        </ButtonBubble>

        <ButtonBubble tooltipText="웹에서 검색" position="top">
          <IconButton
            icon={globeIcon}
            label="검색"
            showText={!isCompact}
            wrappercolor="none"
          />
        </ButtonBubble>

        <ButtonBubble tooltipText="도구 보기" position="top">
          <IconButton icon={ellipsisIcon} wrappercolor="none" />
        </ButtonBubble>
      </LeftGroup>

      <RightGroup>
        <ButtonBubble tooltipText="음성 입력" position="top">
          <IconButton icon={micIcon} wrappercolor="none" />
        </ButtonBubble>

        {!isTyping ? ( //입력하는 순간 전송버튼으로 바뀜
          <ButtonBubble tooltipText="음성모드 사용" position="top">
            <IconButton icon={audioLinesIcon} wrappercolor="filled" />
          </ButtonBubble>
        ) : (
          <IconButton icon={sendIcon} wrappercolor="filled" onClick={onSend} />
        )}
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
