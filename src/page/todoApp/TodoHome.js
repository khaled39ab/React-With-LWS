import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import OthersNavbar from '../OthersNavbar';
import NewTodo from './NewTodo';
import Todos from './Todos';
import './TodoHome.css'

const TodoHome = () => {
    const [todos, setTodos] = useState([]);

    const handleNewTodo = newTodo => {
        setTodos(prevTodos => {
            return [...prevTodos, { id: uuidv4(), newTodo }]
        })
    }

    const handleRemoveTodo = id => {
        const filterTodos = todos.filter(todo => todo.id !== id)
        setTodos(filterTodos)
    }

    return (
        <div>
            <OthersNavbar></OthersNavbar>
            <div style={{ 'margin': '10px', 'backgroundColor': 'gray', 'padding': '20px', 'color': 'white' }}>
                <div className='container'>
                    <h1>Todo App</h1>
                    <NewTodo onNewTodo={handleNewTodo}></NewTodo>
                    <Todos
                        todos={todos}
                        onRemoveTodo={handleRemoveTodo}
                    ></Todos>
                </div>
            </div>
        </div>
    );
};

export default TodoHome;