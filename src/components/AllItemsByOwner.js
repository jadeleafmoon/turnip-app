import React from "react";
import { Card } from "./Card";

const AllItemsByOwner = (props) => {
  const { items, handleClickViewButton, currentUser } = props;
  const defaultUrl =
    "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1326&q=80";

  return (
    <div className="card-wrapper">
      {items
        .filter((item) => item.owner === currentUser)
        .map((item) => {
          return (
            <Card
              img={item.imageUrl || defaultUrl}
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

export default AllItemsByOwner;
