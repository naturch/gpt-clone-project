import React, { useState } from "react";
import { Dog } from "../types/dog";
import calculateAge from "../utils/calculateAge";
import {
  Card,
  Image,
  Info,
  Name,
  MenuButton,
  NameLine,
  Tag,
  TagContainer,
} from "../styles/MyDogCardStyle";
import EditDeleteMenu from "./EditDeleteMenu";

interface Props {
  dog: Dog;
  onEdit: (dog: Dog) => void;
  onDelete: (dog: Dog) => void;
}

const MyDogCard: React.FC<Props> = ({ dog, onEdit, onDelete }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <Card>
      <Image src={dog.image} alt={dog.name} />
      <Info>
        <NameLine>
          <Name>{dog.name}</Name>
          <span>
            {dog.gender === "수컷" ? "♂" : dog.gender === "암컷" ? "♀" : ""}
          </span>
        </NameLine>

        <TagContainer>
          <Tag>{dog.breed}</Tag>
          <Tag>{calculateAge(dog.birthYear)}살</Tag>
          <Tag>{dog.personality}</Tag>
        </TagContainer>
      </Info>
      <MenuButton onClick={toggleMenu}>⋮</MenuButton>
      {showMenu && (
        <EditDeleteMenu
          onEdit={() => {
            onEdit(dog);
            setShowMenu(false);
          }}
          onDelete={() => {
            onDelete(dog);
            setShowMenu(false);
          }}
        />
      )}
    </Card>
  );
};

export default MyDogCard;
