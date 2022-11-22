import React from 'react';
import { useState } from 'react';
import './style3.css';

const TaskNewTodo = () => {
    const [taskTodo, setTaskTodo] = useState()

    const handleChange = () =>{

    }

    const handleSubmit = () =>{

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
                            // value={taskTodo.title}
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
                            // value={taskTodo.desc}
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