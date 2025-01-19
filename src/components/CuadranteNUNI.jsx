import React from "react";

export const CuadranteNUNI = ({ tasks, deleteTask }) => {
  const filteredTasks = tasks.filter((task) => task.isNotUrgentAndNotImportant);

  const handleDelete = (index) => {
    deleteTask(index);
    console.log("borrando tarea");
  };
  return (
    <div className="divMatriz4 scrollableContainer">
      <h2>No importante y no urgente</h2>
      {filteredTasks.map((task, index) => (
        <div className="divTask" key={index}>
          <div className="divTaskTxt">• {task.description}</div>
          <div className="divTaskBtn">
            <button
              onClick={() => {
                handleDelete(
                  tasks.findIndex((t) => t.description === task.description)
                );
              }}
            >
              ✔
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
