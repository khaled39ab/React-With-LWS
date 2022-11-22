import React from 'react';
import './style3.css';

const TaskTodo = (props) => {
    const {title, desc} = props.taskTodo;
    return (
        <article className='task-todo'>
            <h3 className='todo-title'>{title}</h3>
            <p>{desc}</p>
        </article>
    );
};

export default TaskTodo;