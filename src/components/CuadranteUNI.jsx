import React from "react";

export const CuadranteUNI = ({ tasks, deleteTask }) => {
  const filteredTasks = tasks.filter((task) => task.isUrgentAndNotImportant);

  const handleDelete = (index) => {
    deleteTask(index);
    console.log("borrando tarea");
  };
  return (
    <div className="divMatriz2">
      <h2>Urgente y no importante</h2>
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
