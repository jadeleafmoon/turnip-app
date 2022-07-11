import React from "react";
import { Card } from "./Card";
import { v4 as uuidv4 } from "uuid";

const AllItems = (props) => {
  const { items, handleClickViewButton } = props;
  return (
    <div className="card-wrapper">
      {items.map((item) => {
        return (
          <Card
          img="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1326&q=80"
          title={item.name}
            description={item.description}
            price={item.price}
            handleClickViewButton={handleClickViewButton}
            item={item}
          />
        );
      })}
    </div>
  );
};

export default AllItems;
