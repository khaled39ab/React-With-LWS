import React from 'react';

const Component = () => {
    return (
        <div style={{ 'border': '4px solid cyan', 'padding': '10px', 'margin': '10px' }}>
            <h1>What is react component?</h1>
            <p>
                A Component is one of the core building blocks of React. In other words, we can say that every application you will develop in React will be made up of pieces called components. Components make the task of building UIs much easier
            </p>
            <h2>Type of component</h2>
            <p>
                There are 2 types of component.
                <ol>
                    <li>Class components</li>
                    <li>Function components</li>
                </ol>
            </p>
        </div>
    );
};

export default Component;