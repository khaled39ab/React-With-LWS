import React from 'react';

const AboutReact = () => {
    return (
        <div style={{'border':'4px solid cyan', 'padding': '10px', 'margin': '10px'}}>
            <h1>First Class: What is React? </h1>
            <p>React is a free and open-source front-end JavaScript library for building user interfaces based on UI components.</p>
            <p>React is a JavaScript library created by Facebook. <br />
                React is a User Interface (UI) library. <br />
                React is a tool for building UI components</p>

            <br />
            <h1>How React Works?</h1>
            <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
        </div>
    );
};

export default AboutReact;