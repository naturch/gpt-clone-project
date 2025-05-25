import { useState } from "react";

// 드롭다운 열림 상태를 관리하는 재사용 훅
export default function useDropdown() {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((prev) => !prev);
  const close = () => setOpen(false);

  return { open, toggle, close };
}
