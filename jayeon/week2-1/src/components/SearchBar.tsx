import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const Input = styled.input`
  padding: 12px;
  width: 300px;

  font-size: 1rem;
`;

const Button = styled.button`
  padding: 12px 18px;
  background: #6c63ff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    background: #574bff;
  }
`;

interface Props {
  onSearch: (breed: string) => void;
}

const SearchBar: React.FC<Props> = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    if (input.trim()) {
      onSearch(input.trim());
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Wrapper>
      <Input
        placeholder="강아지 품종 입력 (예: Beagle)"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Button onClick={handleSearch}>검색</Button>
    </Wrapper>
  );
};

export default SearchBar;
