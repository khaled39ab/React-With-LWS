import React from 'react';

const Todo = (props) => {
    return (
        <div>
            {
                props.todos.map(todo=>{ <p>todo</p>})
            }
        </div>
    )
}

export default Todo;