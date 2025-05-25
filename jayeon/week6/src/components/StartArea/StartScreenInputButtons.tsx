import styled from "styled-components";
import ButtonBubble from "../styles/ButtonBubble";
import IconButton from "../styles/Buttons";

import plusIcon from "../../assets/icons/plus.svg";
import globeIcon from "../../assets/icons/globe.svg";
import telescopeIcon from "../../assets/icons/telescope.svg";
import paletteIcon from "../../assets/icons/palette.svg";
import ellipsisIcon from "../../assets/icons/ellipsis.svg";
import micIcon from "../../assets/icons/mic.svg";
import audioLinesIcon from "../../assets/icons/audio-lines.svg";
import sendIcon from "../../assets/icons/move-up.svg";

import useWindowWidth from "../../hooks/useWindowWidth";

interface Props {
  isTyping: boolean; //입력중인지
  onSend: () => void; //전송 버튼 클릭 시
}

export default function StartScreenInputButtons({ isTyping, onSend }: Props) {
  const isCompact = useWindowWidth() < 700; //창이 700보다 작은지

  return (
    <Wrapper>
      <LeftGroup>
        <ButtonBubble tooltipText="사진 및 파일 추가" position="bottom">
          <IconButton icon={plusIcon} wrappercolor="none" />
        </ButtonBubble>

        <ButtonBubble tooltipText="웹에서 검색" position="bottom">
          <IconButton
            icon={globeIcon}
            label="검색"
            showText={!isCompact} // isCopact면 텍스트 X
            wrappercolor="none"
          />
        </ButtonBubble>

        <ButtonBubble
          tooltipText="디테일한 보고서를 작성하세요"
          position="bottom"
        >
          <IconButton
            icon={telescopeIcon}
            label="심층 리서치"
            showText={!isCompact}
            wrappercolor="none"
          />
        </ButtonBubble>

        <ButtonBubble tooltipText="무엇이든 시각화하세요" position="bottom">
          <IconButton
            icon={paletteIcon}
            label="이미지 그리기"
            showText={!isCompact}
            wrappercolor="none"
          />
        </ButtonBubble>

        <ButtonBubble tooltipText="도구 보기" position="bottom">
          <IconButton icon={ellipsisIcon} wrappercolor="none" />
        </ButtonBubble>
      </LeftGroup>

      <RightGroup>
        <ButtonBubble tooltipText="음성 입력" position="bottom">
          <IconButton icon={micIcon} wrappercolor="none" />
        </ButtonBubble>
        {/* 입력X= 음성 모드 버튼 , 입력중 = 전송 버튼*/}
        {!isTyping ? (
          <ButtonBubble tooltipText="음성모드 사용" position="top">
            <IconButton icon={audioLinesIcon} wrappercolor="filled" />
          </ButtonBubble>
        ) : (
          <ButtonBubble tooltipText="전송" position="top">
            <IconButton
              icon={sendIcon}
              wrappercolor="filled"
              onClick={onSend}
            />
          </ButtonBubble>
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
