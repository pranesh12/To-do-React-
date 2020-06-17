import React from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
function App() {
  return (
    <div className="App">
      <div className="container">
        <TodoInput></TodoInput>
        <TodoList></TodoList>
      </div>
    </div>
  );
}

export default App;
