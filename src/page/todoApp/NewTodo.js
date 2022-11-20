import React from 'react';
import './NewTodo.css'
import { useState } from 'react';

const NewTodo = (props) => {
    const [todo, setTodo] = useState('');

    const handleInput = e => {
        setTodo(e.target.value)
    }

    const handleTodo = (e) => {
        e.preventDefault();
        props.onTodo(todo)
        e.target.reset()
    }

    return (
        <form className='form' onSubmit={handleTodo}>
            <div className='form-field'>
                <label htmlFor="title">Title: </label>
                <input type="text" name='title' id='title' onChange={handleInput} />
            </div>
            <div className='form-field'>
                <label htmlFor="desc">Description:</label>
                <textarea type="text" name="desc" id="desc" />
            </div>
            <button className='add-btn'>Add Todo</button>
        </form>
    );
};

export default NewTodo;