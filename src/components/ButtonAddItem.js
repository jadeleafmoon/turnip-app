import React from "react";

const ButtonAddItem = (props) => {
  const { setCurrentView, color } = props;

  return (
    <div>
      <button onClick={() => setCurrentView("add item")} activate-color={color}>
        Sell Item
      </button>
    </div>
  );
};

export default ButtonAddItem;
