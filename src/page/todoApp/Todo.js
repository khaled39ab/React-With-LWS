import React from 'react';
import './Todo.css'

const Todo = (props) => {
    const {title, desc} = props.todo;
    
    return (
        <article className='todo'>
            <div className='todo-info'>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
            <div>
                <button className='delete-btn'>X</button>
            </div>
        </article>
    )
}

export default Todo;