import React from 'react';

const EventHandling = () => {
    return (
        <div>
            <h1>Handling Events</h1>
            <p>
                Handling events with React elements is very similar to handling events on DOM elements. There are some syntax differences:
                <ul>
                    <li>React events are named using camelCase, rather than lowercase.</li>
                    <li>With JSX you pass a function as the event handler, rather than a string.</li>
                </ul>
            </p>
        </div>
    );
};

export default EventHandling;