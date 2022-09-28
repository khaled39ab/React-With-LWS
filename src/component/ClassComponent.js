import React, { Component } from 'react';

class ClassComponent extends Component {
    render() {
        return (
            <div>
                <h1>This is from Class component.</h1>
                <h3>Class components</h3>
                <p>
                    A class component must include the extends React.Component statement. This statement creates an inheritance to React.Component, and gives your component access to React.Component's functions.
                    The component also requires a render() method, this method returns HTML.
                </p>
            </div>
        );
    }
}

export default ClassComponent;