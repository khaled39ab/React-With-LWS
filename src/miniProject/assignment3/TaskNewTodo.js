import React from 'react';
import { useState } from 'react';
import './style3.css';

const TaskNewTodo = (props) => {
    const [taskTodo, setTaskTodo] = useState({ taskTitle: '', taskDesc: '' })
    const { taskTitle, taskDesc } = taskTodo;

    const handleChange = e => {
        const fieldName = e.target.name;
        setTaskTodo(prevValue => {
            return { ...prevValue, [fieldName]: e.target.value }
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.onNewTodo(taskTodo)
        setTaskTodo({ taskTitle: '', taskDesc: '' })
    }

    return (
        <div>
            <h1 className="title">Collect Data from a Form</h1>
            <div className="card">
                <form action="" onSubmit={handleSubmit}>
                    <div className="field-group">
                        <label htmlFor="title">Title: </label>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            value={taskTitle}
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
                            value={taskDesc}
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