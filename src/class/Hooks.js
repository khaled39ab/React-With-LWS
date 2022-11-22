import React from 'react';

const Hooks = () => {
    return (
        <div style={{ 'border': '4px solid cyan', 'padding': '10px', 'margin': '10px' }}>
            <h1>React Hooks</h1>
            <h2>What is a Hook?</h2>
            <p>Hooks allow us to "hook" into React features such as state and lifecycle methods.</p>
            <p>State generally refers to data or properties that need to be tracking in an application.</p>

            <h2>Hook Rules</h2>
            <p>
                There are 3 rules for hooks:
                <ul>
                    <li>Hooks can only be called inside React function components.</li>
                    <li>Hooks can only be called at the top level of a component.</li>
                    <li>Hooks cannot be conditional</li>
                </ul>
                <strong>NOTE:</strong> Hooks will not work in React class components.
            </p>

            <h2>React hooks example</h2>
            <ul>
                <li>useState</li>
                <li>useEffect: 
                    <strong>
                        <ul>
                            <li>Make sure don't use useEffect on loops, condition or nested function.</li>
                            <li>Use for fetching data, timers or direct update DOM</li>
                        </ul>
                    </strong>
                </li>
                <li>useContext</li>
                <li>useRef</li>
                <li>useReducer</li>
                <li>useCallback</li>
                <li>useMemo</li>
                <li>Custom hook</li>
            </ul>
        </div>
    );
};

export default Hooks;