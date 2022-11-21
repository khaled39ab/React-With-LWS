import React from 'react';
import Todo from './Todo';
import './Todos.css'

const Todos = (props) => {

    return (
        <section className='todos'>
            {
                props.todos.map((todo) => <Todo
                    key={todo.id}
                    todo={todo}
                    onRemoveTodo={props.onRemoveTodo}
                ></Todo>)
            }
        </section>
    )
}

export default Todos;