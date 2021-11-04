import React from 'react';
const Todo = () => {
    const [task,setTask] = React.useState();
    const [todo,setTodo] = React.useState();
    const [tasks,setTasks] = React.useState();
    let list = [];


    const handleTaskInput = (e) =>{
        setTask(e.target.value);
    }
    const handleTask = (e) =>{
        list.push(
            <li>{task}<button>Delete</button></li>
        );
        setTodo(list);
        
        
    }

    return ( <div>
        <h1>To Do List</h1>
        <input
        type="text"
        onChange={handleTaskInput}
        ></input>
        <button onClick={handleTask}>Add Task</button>
        {todo}


    </div> );
}
 
export default Todo;