import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React from "react";

export const Card = () => {
  return (
    <div className="card">
      <div className="card-body">
        <img className="card-image"/>
        <h2 className="card-title"></h2>
        <p className="card-description"></p>
      </div>
      <button className="card-button"></button>

    </div>

  );
};
