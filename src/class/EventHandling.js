import React from 'react';
import handlingEvent from './../images/HandlingEvent.PNG'

const EventHandling = () => {
    const handleEvent = () =>{
        alert('Button Clicked')
    }
    return (
        <div style={{ 'border': '4px solid cyan', 'padding': '10px', 'margin': '10px' }}>
            <h1>Handling Events</h1>
            <p>
                Handling events with React elements is very similar to handling events on DOM elements. There are some syntax differences:
                <ul>
                    <li>React events are named using camelCase, rather than lowercase.</li>
                    <li>With JSX you pass a function as the event handler, rather than a string.</li>
                    <li>Another difference is that you cannot return false to prevent default behavior in React. You must call preventDefault explicitly. For example, with plain HTML, to prevent the default form behavior of submitting, we can write: <br />
                        <img src={handlingEvent} alt="" />
                    </li>
                </ul>
            </p>

            <button onClick={handleEvent}>Click Me</button>
        </div>
    );
};

export default EventHandling;