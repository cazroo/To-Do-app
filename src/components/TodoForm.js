import React, { useState } from "react"

import {} from "react-dom";

TodoForm = ({addToDo}) => {
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    });

    // handleTaskInputChange = (e) => {
    //     setTodo({...todo, task: e.target.value});
    // }

    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (todo.task.trim()){
    //         addToDo({...todo});
    //         //reset task input
    //         setTodo({...todo, task:""});
    //     }
    // }

    return(
        <form onSubmit={handleSubmit}>
            <input 
                name="task"
                type="text"
                value={todo.task}
                onChange={handleTaskInputChange}
                />
                <button type="submit">submit</button>
        </form>
    );
}

export default TodoForm;