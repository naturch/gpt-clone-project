import styled from "styled-components";

// 기본 아이콘 크기
const baseStyle = `
  width: 18px;
  height: 18px;
`;

// 흰색 아이콘
export const WhiteIcon = styled.img`
  ${baseStyle}
  filter: brightness(0) invert(1);
`;

// 검정색 아이콘
export const BlackIcon = styled.img`
  ${baseStyle}
  filter: none;
`;
