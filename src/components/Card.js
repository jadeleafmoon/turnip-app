import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React from "react";


export const Card = (props) => {
  const { img, title, description, price, item, handleClickViewButton } = props;
  const defaultUrl =
    "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1326&q=80";

  return (
    <div className="card">
      <div className="card-body">
        <img src={img} className="card-image" alt="item to sell" />
        <h2 className="card-title">{title}</h2>
        <p className="card-owner">{item.owner}</p>
        {/* <p className="card-description">{description}</p> */}
        <p className="card-price">$ {price}</p>
      </div>
      <button className="card-button" 
      onClick={() => handleClickViewButton(item)}
      >View</button>
    </div>
  );
};
