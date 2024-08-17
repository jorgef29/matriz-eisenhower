import React from "react";

export const ListaToDo = ({ tasks, deleteTask }) => {
  //porque dentro de un li no se puede poner botones

  const handleDelete = (index) => {
    deleteTask(index);
    console.log("borrando tarea");
  };
  return (
    <>
      <div className="divListaToDo">
        ListaToDo
        <ol>
          {tasks.map((task, index) => (
            <li key={index}>
              {task.description}

              <div className="btnListToDo" style={{ border: "1px solid" }}>
                <button
                  style={{ backgroundColor: "red" }}
                  onClick={() => handleDelete(index)}
                >
                  1
                </button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};
