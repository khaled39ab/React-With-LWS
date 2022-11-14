import React, { useState } from 'react';
import OthersNavbar from '../OthersNavbar';
import NewTodo from './NewTodo';
import Todo from "./Todo";

const todosList = ['todo1', 'todo2', 'todo3'];
const TodosApp = () => {
    const [todos, setTodos] = useState(todosList);

    const handleNewTodos = newTodo => {
        setTodos([...todos, newTodo])
    }
    return (
        <div>
            <OthersNavbar></OthersNavbar>
            <div style={{ 'margin': '50px', 'backgroundColor': 'gray', 'padding': '20px', 'textAlign': 'center', 'color': 'white' }}>
                <NewTodo onTodo={handleNewTodos}></NewTodo>
                <Todo todos={todos}></Todo>
            </div>
        </div>
    )
}

export default TodosApp;