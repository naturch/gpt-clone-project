import styled from "styled-components";
import ButtonBubble from "../styles/ButtonBubble";
import IconButton from "../styles/Buttons";
import WhiteIcon from "../styles/WhiteIcon";

import plusIcon from "../../assets/icons/plus.svg";
import globeIcon from "../../assets/icons/globe.svg";
import telescopeIcon from "../../assets/icons/telescope.svg";
import paletteIcon from "../../assets/icons/palette.svg";
import ellipsisIcon from "../../assets/icons/ellipsis.svg";
import micIcon from "../../assets/icons/mic.svg";
import audioLinesIcon from "../../assets/icons/audio-lines.svg";

export default function StartScreenInputButtons() {
  return (
    <Wrapper>
      <LeftGroup>
        <ButtonBubble tooltipText="사진 및 파일 추가" position="bottom">
          <IconButton>
            <WhiteIcon src={plusIcon} alt="추가" />
          </IconButton>
        </ButtonBubble>

        <ButtonBubble tooltipText="웹에서 검색" position="bottom">
          <IconButton>
            <WhiteIcon src={globeIcon} alt="검색" />
          </IconButton>
        </ButtonBubble>

        <ButtonBubble
          tooltipText="어느 토픽이나 상세한 인사이트 생성"
          position="bottom"
        >
          <IconButton>
            <WhiteIcon src={telescopeIcon} alt="심층 리서치" />
          </IconButton>
        </ButtonBubble>

        <ButtonBubble
          tooltipText="아이디어 및 콘셉트 시각화하기"
          position="bottom"
        >
          <IconButton>
            <WhiteIcon src={paletteIcon} alt="이미지 그리기" />
          </IconButton>
        </ButtonBubble>

        <ButtonBubble tooltipText="도구 보기" position="bottom">
          <IconButton>
            <WhiteIcon src={ellipsisIcon} alt="도구" />
          </IconButton>
        </ButtonBubble>
      </LeftGroup>

      <RightGroup>
        <ButtonBubble tooltipText="음성 입력" position="bottom">
          <IconButton>
            <WhiteIcon src={micIcon} alt="음성 입력" />
          </IconButton>
        </ButtonBubble>

        <IconButton>
          <WhiteIcon src={audioLinesIcon} alt="음성 모드" />
        </IconButton>
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
