import React from "react";

interface Props {
  level: number;
}

const RatingCircle: React.FC<Props> = ({ level }) => {
  const total = 5;
  const circles = Array.from({ length: total }, (_, i) =>
    i < level ? "●" : "○"
  );

  return (
    <div style={{ fontSize: "18px", color: "#6c63ff" }}>{circles.join("")}</div>
  );
};

export default RatingCircle;
