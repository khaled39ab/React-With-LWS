import React, { Component } from 'react';

class ForceUpdate extends Component {
    render() {
        return (
            <div>
                <h1>This is about forceUpdate method</h1>
                <h2>What is forceUpdate method?</h2>
                <p>
                    The components in React will re-render only if the state of the component or the props passed to it changes but if we need to re-render the component if some data changes then we will use forceUpdate() method of React. Calling the forceUpdate() will forcibly re-render the component and thus calls the render() method of the component skipping the shouldComponentUpdate() method.
                </p>
            </div>
        );
    }
}

export default ForceUpdate;