import React from "react";
import ButtonBuy from "./ButtonBuy";
import { Card } from "./Card";

const SelectedItem = (props) => {
  const {
    selectedItem,
    handleClickDeleteItemButton,
    handleClickEditItemButton,
    currentUser,
    handleClickBuy,
    itemWasBought,
  } = props;
  return (
    <section>
      <div>
        {itemWasBought && <h3 className="subtitle">You bought the item!</h3>}
        <div className="card">
          <div className="card-body">
            <img
              src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1326&q=80"
              className="card-image"
              alt="item to sell"
            />
            <h2 className="card-title">{selectedItem.title}</h2>
            <p className="card-owner">{selectedItem.owner}</p>
            <p className="card-description">{selectedItem.description}</p>
            <p className="card-price">{selectedItem.price}</p>
          </div>
          {selectedItem.owner === currentUser ? (
          <div className="bottom-buttons-bar">
            <button onClick={() => handleClickDeleteItemButton(selectedItem)}>
              Delete
            </button>
            <button onClick={() => handleClickEditItemButton(selectedItem)}>
              Edit
            </button>
          </div>
        ) : (
          <ButtonBuy handleClickBuy={handleClickBuy} />
        )}
        </div>


      </div>
    </section>
  );
};

export default SelectedItem;
