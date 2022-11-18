import React from 'react';

const Todos = (props) => {

    return (
        <div>
            {
                props.todos.map((todo, index) => <p key={index}>{todo}</p>)
            }
        </div>
    )
}

export default Todos;