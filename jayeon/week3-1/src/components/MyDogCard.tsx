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
  DetailBox,
} from "../styles/MyDogCardStyle";
import EditDeleteMenu from "./EditDeleteMenu";

interface Props {
  //MyPupPage에서 props로 정보 받아옴 -> 각 카드는 독립적으로 동작 ㅇ
  dog: Dog;
  onEdit: (dog: Dog) => void;
  onDelete: (dog: Dog) => void;
}

const MyDogCard: React.FC<Props> = ({ dog, onEdit, onDelete }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showDetail, setShowDetail] = useState(false);

  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation(); //카드 클릭 이벤트 막기
    setShowMenu((prev) => !prev);
  };

  const toggleDetail = () => {
    setShowDetail((prev) => !prev);
  };

  return (
    <Card onClick={toggleDetail}>
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
      {/*클릭 시 슬라이드로 열림*/}
      {showDetail && (
        <DetailBox>
          <p>다른 정보 / todo 목록 추가</p>
        </DetailBox>
      )}
    </Card>
  );
};

export default MyDogCard;
