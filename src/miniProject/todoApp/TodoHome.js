import React from 'react';
import './todoStyle.css'

const TodoHome = () => {
    return (
        <div style={{ 'border': '4px solid cyan', 'padding': '20px', 'margin': '10px' }}>
            <div>
                <h1>React Todo App</h1> <br />
            </div>
            <hr />
            <hr />
            <div className='todo' style={{ 'margin': '10px' }}>
                <h2>Todo App</h2>
            </div>
        </div>
    );
};

export default TodoHome;