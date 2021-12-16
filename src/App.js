import React, {useState} from "react";
import './App.css';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Todo from "./components/Todo";


function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(){
    setTodos([todo,...todos]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>To Do</p>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} />
      </header>
    </div>
  );
}

export default App;
