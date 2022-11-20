import React from 'react';
import './NewTodo.css'
import { useState } from 'react';

const NewTodo = (props) => {
    const [todo, setTodo] = useState({ title: '', desc: '' });
    const { title, desc } = todo;

    const handleChange = e => {
        const name = e.target.name;
        setTodo(oldValue => {
            return { ...oldValue, [name]: e.target.value }
        })
    }

    const handleTodo = (e) => {
        e.preventDefault();
        console.log(todo);
        setTodo({ title: '', desc: '' })
    }

    return (
        <form className='form' onSubmit={handleTodo}>
            <div className='form-field'>
                <label htmlFor="title">Title: </label>
                <input type="text" name='title' id='title' value={title} onChange={handleChange} />
            </div>
            <div className='form-field'>
                <label htmlFor="desc">Description:</label>
                <textarea type="text" name="desc" id="desc" value={desc} onChange={handleChange} />
            </div>
            <button className='add-btn'>Add Todo</button>
        </form>
    );
};

export default NewTodo;