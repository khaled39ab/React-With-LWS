import React, { useState } from 'react';
import OthersNavbar from '../OthersNavbar';
import NewTodo from './NewTodo';
import Todos from './Todos';
import './TodoHome.css'

const todosList = ['todo1', 'todo2', 'todo3'];

const TodoHome = () => {
    const [todos, setTodos] = useState(todosList);

    const handleNewTodo = newTodo => {
        setTodos([...todos, newTodo])
    }
    return (
        <div>
            <OthersNavbar></OthersNavbar>
            <div style={{ 'margin': '50px', 'backgroundColor': 'gray', 'padding': '20px', 'textAlign': 'center', 'color': 'white' }}>
                <NewTodo onTodo={handleNewTodo}></NewTodo>
                <Todos todos={todos}></Todos>
            </div>
        </div>
    );
};

export default TodoHome;