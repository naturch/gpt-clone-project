import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MyPupPage: React.FC = () => {
  return (
    <Wrapper>
      <h1>🐾 My Pup Page (나의 강아지)</h1>
    </Wrapper>
  );
};

export default MyPupPage;
