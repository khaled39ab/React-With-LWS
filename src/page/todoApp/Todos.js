import React from 'react';
import Todo from './Todo';
import './Todos.css'

const Todos = (props) => {

    return (
        <section>
            {
                props.todos.map((todo, index) => <Todo
                    key={index}
                    todo={todo}
                ></Todo>)
            }
        </section>
    )
}

export default Todos;