import React from "react";
import {
  PlusButtonWrapper,
  HoverText,
  PlusCircle,
} from "../styles/AddDogButtonStyle";

interface Props {
  onClick?: () => void;
}

const AddDogButton: React.FC<Props> = ({ onClick }) => {
  return (
    <PlusButtonWrapper>
      <HoverText>추가하려면 눌러주세요</HoverText>
      <PlusCircle onClick={onClick}>+</PlusCircle>
    </PlusButtonWrapper>
  );
};

export default AddDogButton;
