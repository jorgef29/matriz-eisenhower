import React from "react";

export const Matriz = () => {
  return (
    <>
      <div className="divMatrizContainer">
        <div className="divMatriz1">
          {" "}
          <h2> Urgente e importante</h2>
          <ol>
            <li></li>
            <li></li>
            <li></li>
          </ol>
        </div>
        <div className="divMatriz2">
          Urgente y no importante
          <ol>
            <li></li>
            <li></li>
            <li></li>
          </ol>
        </div>
        <div className="divMatriz3">No urgente e importante</div>
        <div className="divMatriz4">No urgenete y no importante</div>
      </div>
    </>
  );
};
