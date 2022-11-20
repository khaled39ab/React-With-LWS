import React, { useState } from 'react';
import OthersNavbar from '../OthersNavbar';
import NewTodo from './NewTodo';
import Todos from './Todos';
import './TodoHome.css'

const todosList = [
    {
        id: 1,
        title: "Sleeping",
        desc: "I am sleeping at 11 pm"
    },
    {
        id: 2,
        title: "Wake Up",
        desc: "I am wake up at 5 pm"
    },
    {
        id: 3,
        title: "Walking",
        desc: "I am walking for 45 min"
    },
    {
        id: 4,
        title: "Reading",
        desc: "I am reading 5 hours in a day"
    },
    {
        id: 5,
        title: "Playing",
        desc: "I am playing for 1 hour"
    },
];

const TodoHome = () => {
    const [todos, setTodos] = useState(todosList);

    const handleNewTodo = newTodo => {
        setTodos([...todos, newTodo])
    }
    return (
        <div>
            <OthersNavbar></OthersNavbar>
            <div style={{ 'margin': '10px', 'backgroundColor': 'gray', 'padding': '20px', 'color': 'white' }}>
                <div className='container'>
                    <h1>Todo App</h1>
                    <NewTodo onTodo={handleNewTodo}></NewTodo>
                    <Todos todos={todos}></Todos>
                </div>
            </div>
        </div>
    );
};

export default TodoHome;