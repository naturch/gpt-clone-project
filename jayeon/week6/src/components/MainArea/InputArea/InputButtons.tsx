import styled from "styled-components";
import ButtonBubble from "../../styles/ButtonBubble";
import IconButton from "../../styles/IconButton";

import { Plus, Globe, Ellipsis, Mic, AudioLines, MoveUp } from "lucide-react";

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
          <IconButton icon={Plus} wrappercolor="none" />
        </ButtonBubble>

        <ButtonBubble tooltipText="웹에서 검색" position="top">
          <IconButton
            icon={Globe}
            label="검색"
            showText={!isCompact}
            wrappercolor="none"
          />
        </ButtonBubble>

        <ButtonBubble tooltipText="도구 보기" position="top">
          <IconButton icon={Ellipsis} wrappercolor="none" />
        </ButtonBubble>
      </LeftGroup>

      <RightGroup>
        <ButtonBubble tooltipText="음성 입력" position="top">
          <IconButton icon={Mic} wrappercolor="none" />
        </ButtonBubble>

        {!isTyping ? ( //입력하는 순간 전송버튼으로 바뀜
          <ButtonBubble tooltipText="음성모드 사용" position="top">
            <IconButton icon={AudioLines} wrappercolor="filled" />
          </ButtonBubble>
        ) : (
          <IconButton icon={MoveUp} wrappercolor="filled" onClick={onSend} />
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
