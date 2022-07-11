import React from "react";
import { Card } from "./Card";
import { v4 as uuidv4 } from "uuid";

const AllItemsByOwner = (props) => {
  const { items, handleClickViewButton, currentUser } = props;
	console.log('\n 🍎 props:', props);

  return (
    <div className="card-wrapper">
      {items
        .filter((item) => item.owner === currentUser)
        .map((item) => {
          return (
            <Card
              img="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1626&q=80"
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

  // return (
  // 	<section className="item-list">
  // 		<div key={uuidv4()} className="item-card items-top-row">
  // 			<span>Owner</span>
  // 			<span>Item Name</span>
  // 			<span>Price</span>
  // 		</div>
  // 		{items.filter((item) => item.owner === currentUser).map((item) => {
  // 			return (
  // 				<div key={uuidv4()} className="item-card">
  // 					<span>{item.owner}</span>
  // 					<span>{item.name}</span>
  // 					<span>{item.price}</span>
  // 					<button onClick={() => handleClickViewButton(item)}>View</button>
  // 				</div>
  // 			);
  // 		})}
  // 	</section>
  // );
};

export default AllItemsByOwner;
