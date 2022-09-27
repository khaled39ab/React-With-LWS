import React from 'react';

const Rendering = () => {
    return (
        <div style={{ 'border': '4px solid cyan', 'padding': '10px', 'margin': '10px' }}>
            <h1>What is Conditional Rendering</h1>
            <p>
                In React, you can create distinct components that encapsulate behavior you need. Then, you can render only some of them, depending on the state of your application.

                Conditional rendering in React works the same way conditions work in JavaScript. Use JavaScript operators like <strong>if</strong> or the <strong> conditional</strong> operator to create elements representing the current state, and let React update the UI to match them.

                <br /> <br />
                The term “render prop” refers to a technique for sharing code between React components using a prop whose value is a function. A component with a render prop takes a function that returns a React element and calls it instead of implementing its own render logic.
            </p>

            <h2>Purpose of render():</h2>
            <p>
                <ul>
                    <li>React renders HTML to the web page by using a function called render().</li>
                    <li>The purpose of the function is to display the specified HTML code inside the specified HTML element.</li>
                    <li>n the render() method, we can read props and state and return our JSX code to the root component of our app.</li>
                    <li>In the render() method, we cannot change the state, and we cannot cause side effects( such as making an HTTP request to the webserver).</li>
                </ul>
            </p>
        </div>
    );
};

export default Rendering;