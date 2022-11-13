import React from 'react';
import OthersNavbar from '../OthersNavbar';
import NewTodo from './NewTodo';
import Todo from "./Todo";

const TodosApp = () => {
    const todos = ['todo1', 'todo2', 'todo3'];
    return (
        <div>
            <OthersNavbar></OthersNavbar>
            <div style={{ 'margin': '50px', 'backgroundColor': 'gray', 'padding': '20px', 'textAlign': 'center', 'color': 'white' }}>
                <NewTodo></NewTodo>
                <Todo todos={todos}></Todo>
            </div>
        </div>
    )
}

export default TodosApp;