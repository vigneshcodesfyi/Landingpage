import React from "react";
import "./output.css";
const Card = ({ title, description }) => {
  return (
    <div className="bg-red rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
      <h2 className="font-bold text-xl mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Card;
