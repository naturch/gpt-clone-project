import { useState } from "react";
import styled from "styled-components";
import { useModelStore } from "../../store/modelStore";
import DropdownBox from "../styles/DropdownBox";
import DropdownItem from "../styles/DropdownItem";

// 모델 목록
const modelOptions = [
  { id: " gemini-1.5-flash ", name: "Gemini 1.5 Flash" },
  { id: "gemini-1.5-pro", name: "Gemini 1.5 Pro" },
  { id: "gemini-pro", name: "Gemini 1.0 Pro" },
];

export default function ModelDropdown() {
  const { currentModel, setModel } = useModelStore();
  const [open, setOpen] = useState(false);

  return (
    <Wrapper>
      {/* 모델 선택 버튼 */}
      <Button onClick={() => setOpen((prev) => !prev)}>
        {modelOptions.find((m) => m.id === currentModel)?.name || currentModel}{" "}
        ⬇️
      </Button>

      {/* 드롭다운 박스 */}
      {open && (
        <DropdownBox>
          {modelOptions.map((m) => (
            <DropdownItem
              key={m.id}
              onClick={() => {
                setModel(m.id);
                setOpen(false);
              }}
            >
              {m.name}
            </DropdownItem>
          ))}
        </DropdownBox>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
`;

const Button = styled.button`
  background: transparent;
  color: white;
  border: none;
  font-size: 14px;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 6px;

  &:hover {
    background-color: #2d2f2f;
  }
`;
