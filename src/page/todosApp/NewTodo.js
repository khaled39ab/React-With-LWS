import React from 'react';

const NewTodo = () => {
    return (
        <div>
            <form action="">
                <label htmlFor="newTodo">New Todo: </label>
                <input type="text" />
                <button>Add Todo</button>
            </form>
        </div>
    );
};

export default NewTodo;