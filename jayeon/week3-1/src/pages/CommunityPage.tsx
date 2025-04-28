import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CommunityPage: React.FC = () => {
  return (
    <Wrapper>
      <h1>커뮤니티 or 일기장 ..?</h1>
    </Wrapper>
  );
};

export default CommunityPage;
