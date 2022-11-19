import React from 'react';
import './Todo.css'

const Todo = (props) => {
    return (
        <article className='todo'>
            {props.todo}
        </article>
    )
}

export default Todo;