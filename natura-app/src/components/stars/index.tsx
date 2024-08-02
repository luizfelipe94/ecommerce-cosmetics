"use client";

import { FaStar } from "react-icons/fa";
import React from "react";

export type StarsProps = {
  rating: number;
};

const Stars: React.FC<StarsProps> = ({ rating }) => {
  const renderStar = (index: number) => {
    const currentRating = index + 1;
    if (currentRating <= rating) {
      return <FaStar size={20} color="yellow" />;
    } else if (currentRating - 0.5 === rating) {
      return (
        <div style={{ position: "relative", width: 20, height: 20 }}>
          <FaStar size={20} color="gray" style={{ position: "absolute", top: 0, left: 0 }} />
          <FaStar size={20} color="yellow" style={{ position: "absolute", top: 0, left: 0, clipPath: "inset(0 50% 0 0)" }} />
        </div>
      );
    } else {
      return <FaStar size={20} color="gray" />;
    }
  };
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
      {[...Array(5)].map((_, i) => (
        <div key={i} style={{ display: "flex" }}>
          {renderStar(i)}
        </div>
      ))}
    </div>
  );
};

export default Stars;