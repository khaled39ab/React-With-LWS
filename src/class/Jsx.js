import React from 'react';

const Jsx = () => {
    return (
        <div style={{ 'border': '4px solid cyan', 'padding': '10px', 'margin': '10px' }}>
            <h1>What is JSX?</h1>
            <p>
                JSX stands for JavaScript XML. <br />

                JSX allows us to write HTML in React. <br />

                JSX makes it easier to write and add HTML in React.
            </p>
            <p>
                It is simply a syntax extension of JavaScript. It allows us to directly write HTML in React (within JavaScript code). It is easy to create a template using JSX in React, but it is not a simple template language instead it comes with the full power of JavaScript.
            </p>

            <h2>Why JSX?</h2>
            <p>
                React embraces the fact that rendering logic is inherently coupled with other UI logic: how events are handled, how the state changes over time, and how the data is prepared for display.

                Instead of artificially separating technologies by putting markup and logic in separate files, React separates concerns with loosely coupled units called “components” that contain both. We will come back to components in a further section, but if you're not yet comfortable putting markup in JS, this talk might convince you otherwise.

                React doesn't require using JSX, but most people find it helpful as a visual aid when working with UI inside the JavaScript code. It also allows React to show more useful error and warning messages.
            </p>

            <h2>Benefit of JSX</h2>
            <p>
                JSX is faster than normal JavaScript as it performs optimizations while translating to regular JavaScript. Instead of separating the markup and logic in separated files, React uses components for this purpose. We will learn about components in detail in further articles.
                <br />
                <strong>Ex. Syntax:</strong> <br />
                const element = &lt;h1&gt;Welcome to React.&lt;/h1&gt;;
            </p>

        </div>
    );
};

export default Jsx;