import React from 'react';

const VirtualDom = () => {
    return (
        <div style={{'border':'4px solid cyan', 'padding': '10px', 'margin': '10px'}}>
            <h1>Second Class: What is virtual DOM </h1>
            <p>A virtual DOM is a lightweight JavaScript representation of the Document Object Model used in declarative web frameworks such as React, Vue.js, and Elm. Updating the virtual DOM is comparatively faster than updating the actual DOM.</p>

            <br />
            <h1>How does react virtual DOM work?</h1>
            <p>Virtual DOM: React uses Virtual DOM exists which is like a lightweight copy of the actual DOM(a virtual representation of the DOM). So for every object that exists in the original DOM, there is an object for that in React Virtual DOM.</p>
        </div>
    );
};

export default VirtualDom;