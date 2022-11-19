import React from 'react';
import './Todo.css'

const Todo = (props) => {
    return (
        <article className='todo'>
            <div>
                {props.todo}
            </div>
            <div>
                <button className='delete-btn'>X</button>
            </div>
        </article>
    )
}

export default Todo;