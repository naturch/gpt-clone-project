import React from "react";
import styled from "styled-components";

const TemperamentList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 8px;
`;

const Badge = styled.span`
  background: #e0e7ff;
  color: #333;
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 12px;
  margin: 4px;
`;

interface Props {
  temperament: string;
}

const Temperament: React.FC<Props> = ({ temperament }) => {
  const temperamentList = temperament.split(",").map((t) => t.trim());

  return (
    <TemperamentList>
      {temperamentList.map((trait, i) => (
        <Badge key={i}>{trait}</Badge>
      ))}
    </TemperamentList>
  );
};

export default Temperament;
