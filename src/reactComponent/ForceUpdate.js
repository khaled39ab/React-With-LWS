import React, { Component } from 'react';

class ForceUpdate extends Component {
    render() {
        return (
            <div style={{ 'border': '4px solid cyan', 'padding': '10px', 'margin': '10px' }}>
                <h1>This is about forceUpdate method</h1>

                <h2>What is forceUpdate method?</h2>
                <p>
                    The components in React will re-render only if the state of the component or the props passed to it changes but if we need to re-render the component if some data changes then we will use forceUpdate() method of React. Calling the forceUpdate() will forcibly re-render the component and thus calls the render() method of the component skipping the shouldComponentUpdate() method.

                    <strong>Syntax:</strong> <br />
                    component.forceUpdate(callback)
                </p>

                <h2>Difference between forceUpdate vs setState method</h2>
                <p style={{ 'textAlign': 'center' }}> <strong>Difference between forceUpdate vs setState method are:</strong></p>
                <p>
                    <table>
                        <tr>
                            <th>forceUpdate</th>
                            <th>setState</th>
                        </tr>
                        <tr>
                            <td>It re-render the component without even changing the state or props.</td>
                            <td>It re-render the component if some state or props of that component changed.</td>
                        </tr>
                        <tr>
                            <td>It skips the lifecycle shouldComponentUpdate method.</td>
                            <td>It calls the lifecycle shouldComponentUpdate method.</td>
                        </tr>
                        <tr>
                            <td>This method is not recommended.</td>
                            <td>We can use setState when want to update the state.</td>
                        </tr>
                        <tr>
                            <td>It method basically writes the data to this.state and then it calls the render method.</td>
                            <td>It method does not write the data to this.state, it just simply calls the render method.</td>
                        </tr>
                    </table>
                </p>
            </div>
        );
    }
}

export default ForceUpdate;