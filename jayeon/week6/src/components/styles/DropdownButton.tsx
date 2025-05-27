import { useRef } from "react";
import styled from "styled-components";
import useDropdown from "../../hooks/useDropdown";
import IconButton from "../styles/IconButton";
import DropdownBox from "../styles/DropdownBox";
import { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  children: React.ReactNode;
  position?: "bottom" | "right";
}

export default function DropdownToggleButton({
  icon,
  children,
  position = "bottom",
}: Props) {
  const { open, toggle } = useDropdown();
  const buttonRef = useRef<HTMLDivElement>(null);

  return (
    <Wrapper ref={buttonRef}>
      <IconButton icon={icon} wrappercolor="none" onClick={toggle} />
      {open && (
        <StyledDropdownBox $position={position}>{children}</StyledDropdownBox>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
`;

const StyledDropdownBox = styled(DropdownBox)<{
  $position: "bottom" | "right";
}>`
  position: absolute;
  ${({ $position }) =>
    $position === "bottom" ? `top: 36px; right: 0;` : `top: 0; left: 36px;`}
`;
