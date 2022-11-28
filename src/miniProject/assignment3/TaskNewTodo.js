import React from 'react';
import { useState } from 'react';
import './style3.css';

const TaskNewTodo = (props) => {
    const [taskTodo, setTaskTodo] = useState({ title: '', desc: '' })
    const { title, desc } = taskTodo;

    const handleChange = e => {
        const fieldName = e.target.name;
        setTaskTodo(prevValue => {
            return { ...prevValue, [fieldName]: e.target.value }
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.onNewTodo(taskTodo)
        setTaskTodo({ title: '', desc: '' })
    }

    return (
        <div>
            <h1 className="title">Collect Data from a Form</h1>
            <div className="card">
                <form className='form3' onSubmit={handleSubmit}>
                    <div className="field-group">
                        <label htmlFor="title">Title: </label>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            value={title}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="field-group">
                        <label htmlFor="desc">Description: </label>
                        <textarea
                            className='textarea'
                            name="desc"
                            id="desc"
                            value={desc}
                            onChange={handleChange}
                            required></textarea>
                    </div>
                    <div className="field-group">
                        <button className="task-btn" type="submit">
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TaskNewTodo;