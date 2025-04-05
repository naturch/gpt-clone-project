import styled from "styled-components";

export const Card = styled.div`
  width: 300px;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: center;
  transition: all 0.3s;
  position: relative;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const Info = styled.div`
  padding: 16px;
`;

export const Name = styled.h2`
  font-size: 1.4rem;
  color: #333;
  margin-bottom: 8px;
`;

export const NameLine = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  margin-bottom: 12px;
`;

export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
`;

export const Tag = styled.span`
  background-color: #e0e7ff;
  color: #4f46e5;
  font-size: 0.85rem;
  padding: 6px 12px;
  border-radius: 20px;
`;

export const MenuButton = styled.button`
  position: absolute;
  top: 10px;
  right: 12px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    color: #6c63ff;
  }
`;
