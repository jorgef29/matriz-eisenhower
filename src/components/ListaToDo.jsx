import React from "react";

export const ListaToDo = ({
  tasks,
  deleteTask,
  fnAddUI,
  fnAddUNI,
  fnAddNUI,
  fnAddNUNI,
}) => {
  //filtrar lista de tareas en lista
  const filteredTasks = tasks.filter((task) => task.listToDo);
  //porque dentro de un li no se puede poner botones

  const handleDelete = (index) => {
    deleteTask(index);
    console.log("borrando tarea");
  };
  const handleAddUI = (index) => {
    fnAddUI(index);
    console.log("añadiendo UI");
  };
  const handleAddUNI = (index) => {
    fnAddUNI(index);
    console.log("añadiendo urgente y no importante");
  };
  const handleAddNUI = (index) => {
    fnAddNUI(index);
    console.log("añadiendo NUI");
  };
  const handleAddNUNI = (index) => {
    fnAddNUNI(index);
    console.log("añadiendo NUNI");
  };
  return (
    <>
      <div className="divListaToDo">
        <h2>Lista ToDo</h2>
        {filteredTasks.map((task, index) => (
          <div className="divTask" key={index}>
            <div className="divTaskTxt">• {task.description}</div>
            <div className="divTaskBtn">
              <button
                className="btnUI"
                onClick={() => {
                  handleAddUI(
                    // usat find index en vez de index para mejor rendimiento; (soluciono un problema que tenia xd)
                    tasks.findIndex((t) => t.description === task.description)
                  );
                }}
              >
                1
              </button>
              <button
                className="btnUNI"
                onClick={() => {
                  handleAddNUI(
                    tasks.findIndex((t) => t.description === task.description)
                  );
                }}
              >
                2
              </button>
              <button
                className="btnNUI"
                onClick={() => {
                  handleAddUNI(
                    tasks.findIndex((t) => t.description === task.description)
                  );
                }}
              >
                3
              </button>
              <button
                className="btnNUNI"
                onClick={() => {
                  handleAddNUNI(
                    tasks.findIndex((t) => t.description === task.description)
                  );
                }}
              >
                4
              </button>
              <button
                className="btnDelete"
                onClick={() => {
                  handleDelete(
                    tasks.findIndex((t) => t.description === task.description)
                  );
                }}
              >
                5
              </button>
              <button className="btnEdit">6</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
