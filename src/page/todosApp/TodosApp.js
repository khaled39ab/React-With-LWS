import React from 'react';
import OthersNavbar from '../OthersNavbar';
import Todo from "./Todo";

const TodosApp = () => {
    const todos = ['todo1', 'todo2', 'todo3'];
    return (
        <div>
            <OthersNavbar></OthersNavbar>
            <Todo todos={todos}></Todo>
        </div>
    )
}

export default TodosApp;