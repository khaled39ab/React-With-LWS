import React from 'react';

const State = () => {
    return (
        <div style={{ 'border': '4px solid cyan', 'padding': '10px', 'margin': '10px' }}>
            <h1>What is state?</h1>
            <p>
                React components has a built-in state object.
                The state object is where you store property values that belongs to the component.
                When the state object changes, the component re-renders.

                <br /> <br />

                The state is an instance of React Component Class can be defined as an object of a set of observable properties that control the behavior of the component. In other words, the State of a component is an object that holds some information that may change over the lifetime of the component. 
            </p>

            <h2>What is the difference between state and props?</h2>
            <p>
                <strong>props</strong> (short for “properties”) and <strong>state</strong>  are both plain JavaScript objects. While both hold information that influences the output of render, they are different in one important way: <strong>props</strong> get passed to the component (similar to function parameters) whereas <strong>state</strong> is managed within the component (similar to variables declared within a function).
            </p>
        </div>
    );
};

export default State;