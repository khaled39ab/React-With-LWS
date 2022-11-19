import React from 'react';
import './Todo.css'

const Todo = (props) => {
    return (
        <article>
            {props.todo}
        </article>
    )
}

export default Todo;