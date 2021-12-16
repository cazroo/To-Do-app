import React from "react";
import TodoForm from "./TodoForm";

function Todo({todo}) {
    return(
        <div style={{display: "flex"}}>
            <input type="checkbox" />
            <li
                style={{
                    color:"black",
                    textDecoration: todo.completed ? "line-through": null
                }}>
                    {todo.task}
            </li>
            <button>X</button>
        </div>
    );
}

export default Todo;