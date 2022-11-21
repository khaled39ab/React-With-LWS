import React from 'react';
import './Todo.css'

const Todo = (props) => {
    const { title, desc } = props.todo.newTodo;
    const { id } = (props.todo);

    const removeTodo = (id) => {
        props.onRemoveTodo(id);
    }

    return (
        <article className='todo'>
            <div className='todo-info'>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
            <div>
                <button className='delete-btn' onClick={() => removeTodo(id)}>X</button>
            </div>
        </article>
    )
}

export default Todo;