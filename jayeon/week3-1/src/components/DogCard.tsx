import React from "react";
import styled from "styled-components";
import Temperament from "./Temperament";
import RatingCircle from "./RatingCircle";

const Card = styled.div`
  width: 320px;
  padding: 20px;
  border-radius: 12px;
  background: #fff;
  box-shadow: var(--card-shadow));
  text-align: center;
  display: flex;
  flex-direction: column;
  overflow: visible;
  

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
      <p>
        털 빠짐<RatingCircle level={Number(dog.shedding)}></RatingCircle>
      </p>
      <p>
        짖는 정도 <RatingCircle level={Number(dog.barking)} />
      </p>
      <Temperament temperament={dog.temperament} />
    </Card>
  );
};

export default DogCard;
