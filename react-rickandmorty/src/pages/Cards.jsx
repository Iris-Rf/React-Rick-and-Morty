import React from "react";

const Cards = ({ characters = [] }) => {
  return (
    <div className="container-cards">
      {characters.map((item, index) => (
        <div key={index} className="colum-cards">
          <div className="card"></div>
          <img src={item.image} alt=""></img>
        </div>
      ))}
    </div>
  );
};

export default Cards;
