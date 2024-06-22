import React from "react";

export const Matriz = () => {
  return (
    <>
      <div style={{ border: "1px solid black" }}>
        Matriz
        <div style={{ border: "1px solid black" }}>
          {" "}
          Urgente e importante
          <ol>
            <li></li>
            <li></li>
            <li></li>
          </ol>
        </div>
        <div>
          Urgente y no importante
          <ol>
            <li></li>
            <li></li>
            <li></li>
          </ol>
        </div>
        <div>No urgente e importante</div>
        <div>No urgenete y no importante</div>
      </div>
    </>
  );
};
