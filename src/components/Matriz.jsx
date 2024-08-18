import React from "react";
import { CuadranteUI } from "./CuadranteUI";
import { CuadranteUNI } from "./CuadranteUNI";
import { CuadranteNUI } from "./CuadranteNUI";
import { CuadranteNUNI } from "./CuadranteNUNI";

export const Matriz = ({ tasks, deleteTask }) => {
  return (
    <>
      <div className="divMatrizContainer">
        <CuadranteUI tasks={tasks} deleteTask={deleteTask} />
        <CuadranteUNI tasks={tasks} deleteTask={deleteTask} />
        <CuadranteNUI tasks={tasks} deleteTask={deleteTask} />
        <CuadranteNUNI tasks={tasks} deleteTask={deleteTask} />
      </div>
    </>
  );
};
