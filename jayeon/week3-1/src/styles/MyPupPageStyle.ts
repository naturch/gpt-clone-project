import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: var(--bg-color);
  padding: 120px 20px 40px;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`;

//강아지 카드 리스트
export const DogList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  margin-top: 40px;
`;
//등록된 강아지 카드가 없을 때 띄울 문구
export const Message = styled.p`
  font-size: 1.1rem;
  color: #888;
  text-align: center;
  margin-top: 20px;
`;
