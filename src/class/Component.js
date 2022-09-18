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

            <h1>React Props</h1>
            <p>
                Props stand for "Properties." They are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It gives a way to pass data from one component to other components. It is similar to function arguments. Props are passed to the component in the same way as arguments passed in a function.
            </p>

            <p>
                Props are <strong>immutable</strong> so we cannot modify the props from inside the component. Inside the components, we can add attributes called props. These attributes are available in the component as <strong>this.props</strong> and can be used to render dynamic data in our render method.

                When you need immutable data in the component, you have to add props to <strong>reactDom.render()</strong> method in the <strong>main.js</strong> file of your ReactJS project and used it inside the component in which you need. It can be explained in the below example.
            </p>
        </div>
    );
};

export default Component;