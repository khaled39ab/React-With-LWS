import React from 'react';
import Todo from './Todo';
import './Todos.css'

const Todos = (props) => {
    // console.log(props.todos);
    return (
        <section className='todos'>
            {
                props.todos.map((todo) => <Todo
                    key={todo.id}
                    todo={todo.newTodo}
                ></Todo>)
            }
        </section>
    )
}

export default Todos;