import React, { useState } from "react";

export const InputToDo = ({ saveTask }) => {
  const [description, setDescription] = useState(""); //estado para guardar la descripcion de la tarea

  //funcion para manejar el cambio en el input
  const handleChange = (e) => {
    setDescription(e.target.value);
  };
  //evento al hacer click que guarde y setee la descripcion
  const onClick = () => {
    //validacion de que exista descripcion
    if (description === "") return;
    saveTask(description);
    setDescription("");
  };
  //funcion para cuando se hace enter en el input
  const handleKeyDown = (e) => {
    //se puede hacer ternario
    if (e.key === "Enter") {
      onClick();
    }
  };
  return (
    <>
      <div className="header">
        <h1>Organizador </h1>
      </div>
      <div className="inputSection">
        <input
          type="text"
          value={description}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <button type="submit" onClick={onClick}>
          Guardar tarea
        </button>
      </div>
    </>
  );
};
