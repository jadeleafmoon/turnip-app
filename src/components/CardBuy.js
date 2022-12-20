import React from "react";

export const Card = (props) => {
  const { img, title, description, price, item, handleClickViewButton } = props;

  return (
    <div className="card">
      <div className="card-body">
        <img src={img} className="card-image" alt="item to sell" />
        <h2 className="card-title">{title}</h2>
        <p className="card-owner">{item.owner}</p>
        <p className="card-description">{description}</p>
        <p className="card-price">{price}</p>
      </div>
      <button className="card-button" 
      onClick={() => handleClickViewButton(item)}
      >View</button>
    </div>
  );
};
