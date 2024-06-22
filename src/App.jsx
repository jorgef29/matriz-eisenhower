import { useState } from "react";
import "./App.css";
import { ListaToDo } from "./components/ListaToDo";
import { Matriz } from "./components/Matriz";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Organizador de tareas</h1>
      <div>
        <input type="text" />
        <button type="submit">Guardar tarea</button>
      </div>
      <Matriz />

      <ListaToDo />
    </>
  );
}

export default App;
