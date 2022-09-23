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

                <br />
                We have already learned about Props and we got to know that Props are also objects that hold information to control the behavior of that particular component, sounds familiar to State indeed but props and states are nowhere near be same. Let us differentiate the two.
                <ul>
                    <li>
                        Props are immutable i.e. once set the props cannot be changed, while State is an observable object that is to be used to hold data that may change over time and to control the behavior after each change.
                    </li>
                    <li>
                        States can be used in Class Components, Functional components with the use of React Hooks (useState and other methods) while Props don’t have this limitation.
                    </li>
                </ul>
            </p>

            <h2>Conventions of Using State in React</h2>
            <p>
                State of a component should prevail throughout the lifetime, thus we must first have some initial state, to do so we should define the State in the constructor of the component’s class.
            </p>
            <p>
                State should never be updated explicitly. React uses an observable object as the state that observes what changes are made to the state and helps the component behave accordingly. For example, if we update the state of any component like the following the webpage will not re-render itself because React State will not be able to detect the changes made.

                "this.state.attribute = 'new-value';"
            </p>
        </div>
    );
};

export default State;