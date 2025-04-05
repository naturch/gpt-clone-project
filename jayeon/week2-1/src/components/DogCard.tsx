import React from "react";
import styled from "styled-components";
import Temperament from "./Temperament";

const Card = styled.div`
  width: 320px;
  padding: 20px;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.08);
  text-align: center;
  display: flex;
  flex-direction: column;
  overflow: visible;
  padding: 20px;

  @media (max-width: 768px) {
    width: 90vw;
    height: auto;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 15px;
`;

interface Props {
  dog: {
    image: string;
    name: string;
    lifespan: string;
    temperament: string;
    shedding: string;
    barking: string;
  };
}

const DogCard: React.FC<Props> = ({ dog }) => {
  return (
    <Card>
      <Img src={dog.image} alt={dog.name} />
      <h2>{dog.name}</h2>
      <p>수명: {dog.lifespan}</p>
      <p>털 빠짐: {dog.shedding}</p>
      <p>짖는 정도: {dog.barking}</p>
      <Temperament temperament={dog.temperament} />
    </Card>
  );
};

export default DogCard;
