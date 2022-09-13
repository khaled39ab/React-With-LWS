import React from 'react';

const VirtualDom = () => {
    return (
        <div style={{ 'border': '4px solid cyan', 'padding': '10px', 'margin': '10px' }}>
            <h1>Second Class: What is virtual DOM </h1>
            <p>A virtual DOM is a lightweight JavaScript representation of the Document Object Model used in declarative web frameworks such as React, Vue.js, and Elm. Updating the virtual DOM is comparatively faster than updating the actual DOM.</p>

            <br />
            <h1>How does react virtual DOM work?</h1>
            <p>Virtual DOM: React uses Virtual DOM exists which is like a lightweight copy of the actual DOM(a virtual representation of the DOM). So for every object that exists in the original DOM, there is an object for that in React Virtual DOM. <br />
            It is exactly the same, but it does not have the power to directly change the layout of the document. Manipulating DOM is slow, but manipulating Virtual DOM is fast as nothing gets drawn on the screen. So each time there is a change in the state of our application, the virtual DOM gets updated first instead of the real DOM. You may still wonder, “Aren't we doing the same thing again and doubling our work? How can this be faster?” Read below to understand how things will be faster using virtual DOM.
            </p>

            <br />
            <h2>Is the Shadow DOM the same as the Virtual DOM?</h2>
            <p>No, they are different. The Shadow DOM is a browser technology designed primarily for scoping variables and CSS in web components. The virtual DOM is a concept implemented by libraries in JavaScript on top of browser APIs.</p>

            <br />
            <h2>Difference between ShadowDOM and VirtualDOM ?</h2>
            <p>
                <strong>Virtual DOM:</strong>
                <ul>
                    <li>Virtual DOM, in simple terms, is nothing but the complete and full representation of an actual DOM.</li>
                    <li>Since any changes to the DOM causes the page to re-render more often than not, Virtual DOM primarily attempts to avoid any unnecessary and expensive changes to the DOM.</li>
                    <li>This is achieved by grouping changes and doing a single re-render instead of several small ones.</li>
                </ul> <br />

                <strong>Shadow DOM:</strong>
                <ul>
                    <li>Shadow DOM, on the other hand, relates mostly to the concept of encapsulation. It is a tool that allows developers to overcome DOM encapsulation.</li>
                    <li>It refers to the browser's potential to add a subtree of DOM elements into the rendering of a document, but not into the DOM tree of the main document.</li>
                    <li>Thus, it isolates the DOM and ensures that the DOM of a component is a separate element that won't appear in a global DOM.</li>
                </ul>
            </p>



        </div>
    );
};

export default VirtualDom;