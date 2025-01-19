import { useState, useEffect } from "react";
import "./App.css";
import { ListaToDo } from "./components/ListaToDo";
import { Matriz } from "./components/Matriz";
import { InputToDo } from "./components/InputToDo";

//TODO: Fix bug when deleting tasks
function App() {
  const [tasks, setTasks] = useState([]);

  // Cargar tareas desde localStorage al iniciar
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    console.log("Recovered tasks from localStorage:", savedTasks);
    if (savedTasks) {
      try {
        setTasks(JSON.parse(savedTasks));
      } catch (error) {
        console.error("Error parsing JSON from localStorage", error);
      }
    }
  }, []);

  // Guardar tareas en localStorage cuando cambien
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log("Tasks saved to localStorage:", tasks);
  }, [tasks]);

  const saveTask = (description) => {
    setTasks([
      ...tasks,
      {
        description,
        isUrgentAndImportant: false,
        isUrgentAndNotImportant: false,
        isNotUrgentAndImportant: false,
        isNotUrgentAndNotImportant: false,
        listToDo: true,
      },
    ]);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const fnAddUI = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index
          ? { ...task, isUrgentAndImportant: true, listToDo: false }
          : task
      )
    );
  };

  const fnAddUNI = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index
          ? { ...task, isUrgentAndNotImportant: true, listToDo: false }
          : task
      )
    );
  };

  const fnAddNUI = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index
          ? { ...task, isNotUrgentAndImportant: true, listToDo: false }
          : task
      )
    );
  };

  const fnAddNUNI = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index
          ? { ...task, isNotUrgentAndNotImportant: true, listToDo: false }
          : task
      )
    );
  };

  return (
    <>
      <InputToDo saveTask={saveTask} />
      <div className="gridContainer">
        <div className="container">
          <Matriz tasks={tasks} deleteTask={deleteTask} />
          <ListaToDo
            tasks={tasks}
            deleteTask={deleteTask}
            fnAddUI={fnAddUI}
            fnAddUNI={fnAddUNI}
            fnAddNUI={fnAddNUI}
            fnAddNUNI={fnAddNUNI}
          />
        </div>
      </div>
    </>
  );
}

export default App;
