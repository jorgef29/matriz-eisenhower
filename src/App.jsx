import { useState } from "react";
import "./App.css";
import { ListaToDo } from "./components/ListaToDo";
import { Matriz } from "./components/Matriz";
import { InputToDo } from "./components/InputToDo";
function App() {
  const [tasks, setTasks] = useState([]);
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
    setTasks(tasks.filter((task, i) => i !== index));
  };
  return (
    <>
      <InputToDo saveTask={saveTask} />
      <div className="gridContainer">
        <div className="container">
          <Matriz />
          <ListaToDo tasks={tasks} deleteTask={deleteTask} />
        </div>
      </div>
      {console.log(tasks)}
    </>
  );
}

export default App;
