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
                    <li><strong>Class components</strong></li>
                    <p>
                        A class component must include the extends React.Component statement. This statement creates an inheritance to React.Component, and gives your component access to React.Component's functions.
                        The component also requires a render() method, this method returns HTML.
                    </p>
                    <br />

                    <li><strong>Function components</strong></li>
                    <p>
                        A Function component also returns HTML, and behaves much the same way as a Class component, but Function components can be written using much less code, are easier to understand, and will be preferred in this tutorial.
                    </p>
                </ol>
            </p>
            <h2>Converting a Function to a Class</h2>
            <p>
            You can convert a function component like Clock to a class in five steps:
                <ol>
                    <li>Create an ES6 class, with the same name, that extends React.Component.</li>
                    <li>Add a single empty method to it called render().</li>
                    <li>Move the body of the function into the render() method.</li>
                    <li>Replace props with this.props in the render() body.</li>
                    <li>Delete the remaining empty function declaration.</li>
                </ol>
            </p>

            <h1>React Props</h1>
            <p>
                Props stand for <strong>"Properties."</strong> They are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It gives a way to pass data from one component to other components. It is similar to function arguments. Props are passed to the component in the same way as arguments passed in a function.
            </p>

            <p>
                Props are <strong>immutable</strong> so we cannot modify the props from inside the component. Inside the components, we can add attributes called props. These attributes are available in the component as <strong>this.props</strong> and can be used to render dynamic data in our render method.

                When you need immutable data in the component, you have to add props to <strong>reactDom.render()</strong> method in the <strong>main.js</strong> file of your ReactJS project and used it inside the component in which you need. It can be explained in the below example.
            </p>

            
            <h2>How to use props in React</h2>
            <p>
                There are two way of using props.
                <ol>
                    <li><strong>Props without destructuring</strong></li>

                    <ul>
                        <li>Step 1 - Pass in props as an argument</li>
                        <p><small>The first line of the code <strong>function Tool(props){ }. </strong>This automatically allows you to use props in your React app's component.</small></p>

                        <li>Step 2 - Declare props variable(s)</li>
                        <p><small>If do not want to create variables for props, we can go ahead and pass them directly into template like this: &lt;h1&gt; My name is <strong>&#123;props.name&#125;</strong> &lt;/h1&gt;</small></p>

                        <li>Step 3 - Use variable(s) in JSX template</li>
                        <p><small>Now we have declared our variables, we can go on and place them where we want them to be in our code.</small></p>

                        <li>Step 4 - Pass data to props in the <strong>App</strong>  component</li>
                        <p><small>We are done creating our props, so the next step is to pass data to them. We have already imported the Tool component and this is displayed in the browser at the moment</small></p>
                    </ul>


                    <li><strong>Props with destructuring</strong></li>
                    <p>The code for this section is entirely the same as the last section except for the method for declaring the props.</p>
                    <p>Props with destructuring template like this: <strong>function Tool(&#123;name, tool&#125;)</strong></p>

                </ol>
            </p>
        </div>
    );
};

export default Component;