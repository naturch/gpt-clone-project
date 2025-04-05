import React, { useEffect, useState } from "react";
import {
  SearchContainer,
  SearchBox,
  Input,
  Button,
} from "../styles/SearchBarStyle";

interface Props {
  onSearch: (breed: string) => void;
}

const SearchBar: React.FC<Props> = ({ onSearch }) => {
  const [input, setInput] = useState("");
  const [triggerSearch, setTriggerSearch] = useState(false);

  // 검색 실행용 useEffect
  useEffect(() => {
    if (triggerSearch && input.trim()) {
      onSearch(input.trim());
      setTriggerSearch(false); // 재진입 방지
    }
  }, [triggerSearch, input, onSearch]);

  const handleSearch = () => {
    setTriggerSearch(true); // 버튼 누르면 검색
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setTriggerSearch(true); // Enter로도 검색
    }
  };

  return (
    <SearchContainer>
      <SearchBox>
        <Input
          placeholder="강아지 품종 입력 (예: Beagle)"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <Button onClick={handleSearch}>검색</Button>
      </SearchBox>
    </SearchContainer>
  );
};

export default SearchBar;
