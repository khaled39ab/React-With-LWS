import React from 'react';
import './style3.css';

const TaskTodo = (props) => {
    const { id, title, desc } = props.taskTodo;

    const removeTodo = id => {
        props.onRemoveTodo(id);
    }

    return (
        <article className='task-todo'>
            <h3 className='todo-title'>
                <div>{title}</div>
                <div style={{ color: 'red', cursor: 'pointer' }} onClick={() => removeTodo(id)}>X</div>
            </h3>
            <p>{desc}</p>
        </article>
    );
};

export default TaskTodo;